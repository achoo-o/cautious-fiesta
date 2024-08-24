import express from 'express'
import * as fs from 'node:fs/promises'
import request from 'superagent'
// import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    //Retrieve road events
    const location = await request.get(
      `https://services.arcgis.com/CXBb7LAjgIIdcsPt/arcgis/rest/services/NZTA_Highway_Information/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`,
    )

    //FUTURE: If empty, access most recent 'cache' (json file) saved on server and use instead. Display when last updated.
    if (location.body.features.length === 0) {
      //ACCESS DATA --

      //const json = await fs.readFile('./storage/data.json','utf-8')
      //const data = JSON.parse(json)

      res
        .sendStatus(503)
        .send(
          'The Waka Kotahi API is currently down. Please try again in a moment.',
        )
    } else {
      //update 'cache' and 'last updated'
      const data = {...location.body.features, lastUpdated: Date.now()}
      //This will save 'lastUpdated' at the highest level; i.e {type: 'string', features: [], lastUpdated: 1724471789062}
      const save = JSON.stringify(data)
      await fs.writeFile('./storage/data.json', save, 'utf-8')
      //Extract coordinates
      const coordinates = location.body.features.map(
        (obj) => obj.geometry.coordinates,
      )
      //Retrieve Geocode location
      const promises = coordinates.map((singleCoord: [number, number]) => {
        return request.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${singleCoord[1]},${singleCoord[0]}&key=${process.env.GEOCODE_API_KEY}`,
        )
      })
      // //Wait to resolve
      const googlePromises = await Promise.all(promises)

      //Check what return line 47 gives incl. undefined
      const areaNames = googlePromises.map((obj) => {
        // console.log(obj.body.results[0].address_components)
        return obj.body.results[0].address_components.find((o) =>
          o.types.includes('administrative_area_level_1'),
        )?.short_name
      })

      //create a new object to return to frontend which includes the general area name without modifying the original array
      const response = location.body.map((obj, i) => {
        return { ...obj, generalArea: areaNames[i] }
      })

      res.json(location.body)
    }
  } catch (err) {
    console.log('Cannot return geocode information: ', err)
    res.sendStatus(500).send('Something went wrong. Please try again later.')
  }
})
export default router

//JSON stringify can make [Object object] readable, and pretty by adding the optional args '0, 2'
//Node repl good for testing data samples
//Optional dot notation can be used: .?property
