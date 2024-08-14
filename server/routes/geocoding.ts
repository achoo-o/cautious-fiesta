import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    //Retrieve road events
    const location = await request.get(`https://services.arcgis.com/CXBb7LAjgIIdcsPt/arcgis/rest/services/NZTA_Highway_Information/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`)
    const coordinates = location.body.features.map((obj) => obj.geometry.coordinates)
    //Retrieve Geocode location
    const promises = coordinates.map((singleCoord: [number, number]) => {
      return request.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${singleCoord[0]},${singleCoord[1]}&key=${process.env.GEOCODE_API_KEY}`)
    })
    //Wait to resolve
    const googlePromises = await Promise.all(promises)
    //Continue from here
    res.json(location.body)
  } catch (err) {
    console.log('Cannot return geocode information: ', err)
    res.sendStatus(500).send('Something went wrong. Please try again later.')
  }
})
export default router

// const { OBJECTID, locationArea, eventID } = testLocation
// const newObj = {OBJECTID, locationArea, eventID}