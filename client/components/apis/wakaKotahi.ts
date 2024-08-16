import request from 'superagent'
import type { RoadEvents } from "../../../models/road-events";

//Generic Link: https://opendata-nzta.opendata.arcgis.com/datasets/NZTA::road-events/explore

export async function fetchRoadEvents() {
  const res = await request.get(`/api/v1/roadevents`)
  console.log('res', res)
  // return res.body as RoadEvents
  return res.body
}