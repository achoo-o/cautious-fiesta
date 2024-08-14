import express, { request } from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    //figuring it out
    // const roadEvents = await request.get(`https://services.arcgis.com/CXBb7LAjgIIdcsPt/arcgis/rest/services/NZTA_Highway_Information/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`)
    // console.log({roadEvents})
    res.send('hello')
  } catch (err) {
    console.log('Cannot return geocode information: ', err)
    res.sendStatus(500).send('Something went wrong. Please try again later.')
  }
})
export default router
