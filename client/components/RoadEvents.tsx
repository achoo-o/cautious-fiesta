import { useQuery } from '@tanstack/react-query'
import { fetchRoadEvents } from "./apis/wakaKotahi"


export default function RoadEvents() {

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['nz-road-events'],
    queryFn: () => fetchRoadEvents()
  })

  if (isPending) return (<p>Loading...</p>)

  if (isError) return (<p>{`Failed to retrieve data: ${error.message}`}</p>)

  return (
    <div>
      {data.features.map((el) => {
        const timestamp = el.properties.startDate
        const timestampToDate = new Date(timestamp)
        const dateArr = timestampToDate.toString().split('')
        const date = dateArr.splice(0, 10).join('') + ' ' + dateArr.splice(6,5).join('')

        return (
          <div key={el.properties.GlobalID}>
            <p>{`${date}`}</p>
            <p>{`${el.properties.locationArea}`}</p>
          </div>
        )
      })}
    </div>
    //Sort by: Regions under south/north island headers
    //Each one opens up to a page of the regions incidents
  )
}