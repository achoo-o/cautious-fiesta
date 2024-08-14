import request from 'superagent'
import 'dotenv/config'

//API with key request via proxy

export async function fetchRoadEvents(lat: number, lng: number) {
  const res = await request.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GEOCODE_API_KEY}`)
  return res.body //as model
}