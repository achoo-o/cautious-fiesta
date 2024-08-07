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
      {data.features.map((el, i) => {
        return (
          <p key={i}>{`${el}`}</p>
        )
      })}
    </div>
    //Sort by: Regions under south/north island headers
    //Each one opens up to a page of the regions incidents
  )
}