import request from 'superagent'
import type { RoadEvents } from "../../../models/road-events";

export async function fetchRoadEvents() {
  //Calling backend route
  const res = await request.get(`/api/v1/waka-kotahi/road-events`)
  console.log('Responseee',res)
  return res.body as RoadEvents
}