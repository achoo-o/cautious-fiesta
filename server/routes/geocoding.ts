import express from 'express'
import request from 'superagent'
// import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    //Retrieve road events
    const location = await request.get(
      `https://services.arcgis.com/CXBb7LAjgIIdcsPt/arcgis/rest/services/NZTA_Highway_Information/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`,
    )

    // console.log(`location.body: ${JSON.stringify(location.body)}`)

    //FUTURE: If empty, access most recent 'cache' (json file) saved on server and use instead. Display when last updated.
    if (location.body.features.length === 0) {
      res
        .sendStatus(503)
        .send(
          'The Waka Kotahi API is currently down. Please try again in a moment.',
        )
    } else {
      //update 'cache' and 'last updated'
      const coordinates = location.body.features.map(
        (obj) => obj.geometry.coordinates,
      )
      // //Retrieve Geocode location
      const promises = coordinates.map((singleCoord: [number, number]) => {
        return request.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${singleCoord[1]},${singleCoord[0]}&key=${process.env.GEOCODE_API_KEY}`,
        )
      })
      // //Wait to resolve
      const googlePromises = await Promise.all(promises)
      // //Continue from here
      // console.log(`coordinates[0]: ${coordinates[0][1]},${coordinates[0][0]}`)
      // console.log(
      //   `googlePromises[0].body: ${JSON.stringify(googlePromises[1].body, null, 2)}`,
      // )

      // obj in the node console is the same as googlePromises[1].body
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

// const { OBJECTID, locationArea, eventID } = testLocation
// const newObj = {OBJECTID, locationArea, eventID}
