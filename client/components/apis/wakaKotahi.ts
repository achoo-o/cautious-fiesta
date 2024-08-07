import request from 'superagent'
import type { RoadEvents, Identifiers, Coordinates, Details } from "../../models/road-events";

export async function fetchRoadEvents() {
  const res = await request.get(`https://services.arcgis.com/CXBb7LAjgIIdcsPt/arcgis/rest/services/NZTA_Highway_Information/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`)
  return res.body as RoadEvents
}