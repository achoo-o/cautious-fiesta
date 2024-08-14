import request from 'superagent'
import 'dotenv/config'

//API with key request via proxy
//The 'level' refers to the Administrative Area Level:
//https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes


export async function fetchLevelOne(lat: number, lng: number) {
  const res = await request.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GEOCODE_API_KEY}`)
  return res.body //as model
}