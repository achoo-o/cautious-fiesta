export interface InitialResponse {
  //plus_code: Unneeded
  results: Results
  status: string
}

export interface Results {
  address_components: Address
  formatted_address: string
  //geometry: Unneeded
  //place_id: Unneeded
  //types: Unneeded
}

export interface Address {
  long_name: string
  short_name: string
  types: string[] //administrative_area_level_1 usually denotes the CITY
}