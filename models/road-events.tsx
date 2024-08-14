export interface RoadEvents {
  type: string
  features: Identifiers[]
}

export interface Identifiers {
  type: string
  id: number
  geometry: Coordinates
  properties: Details
}

export interface Coordinates {
  type: string
  coordinates: number[]
}

export interface Details {
  OBJECTID: number
  status: string
  eventIsland: string
  directLineDistance1?: string
  directLineDistance2?: string
  directLineDistance3?: string
  eventDescription: string
  eventType: string
  expectedResolution: string
  impact: string
  planned: string
  restrictions?: null
  startDate: number
  endDate: number
  informationSource: string
  supplier: string
  eventCreated: number
  eventModified: number
  GDB_GEOMATTR_DATA?: null
  GlobalID: string
  eventComments?: string
  locationArea: string
  alternativeRoute?: string
  eventId: number
  CreationDate: number
  Creator: string
  EditDate: number
  Editor: string
}