import { useQuery } from '@tanstack/react-query'
import { fetchRoadEvents } from "./apis/wakaKotahi"
import { Identifiers } from '../../models/road-events'


export default function RoadEvents() {

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['nz-road-events'],
    queryFn: () => fetchRoadEvents()
  })

  if (isPending) return (<p>Loading...</p>)

  if (isError) return (<p>{`Failed to retrieve data: ${error.message}`}</p>)
  
  function translateDate(date: number) {
    /* Translates date from received: Unix Timestamp */
    const translate = new Date(date).toString().split('')
    return translate.splice(0, 10).join('') + ' ' + translate.splice(6,5).join('')
  }
  
  return (
    <div className="event-container">
      {data.features.map((obj: Identifiers) => {

        const date =  translateDate(obj.properties.startDate)
        const { eventType, eventDescription, impact, locationArea, GlobalID } = obj.properties

        return (
          <div className="event-item" key={GlobalID}>
            <div className="circle"></div>
            <ul>
            <li>{`${date}`}</li>
            <li>{`${eventType}: ${eventDescription}`}</li>
            <li>{`${impact} on ${locationArea}`}</li>
            </ul>
          </div>
        )
      })}
    </div>
    //Sort by: Regions under south/north island headers
    //Each one opens up to a page of the regions incidents
  )
}