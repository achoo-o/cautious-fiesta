import request from 'superagent'

//Generic Link: https://opendata-nzta.opendata.arcgis.com/datasets/NZTA::road-events/explore

export async function fetchRoadEvents() {
  const res = await request.get(`/api/v1/roadevents`)
  console.log('res', res.body.type)
  // return res.body as RoadEvents
  return res.body
}