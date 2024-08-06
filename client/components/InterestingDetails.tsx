import { useParams } from "react-router-dom"
import interestingAnimals from "../../data/interestingAnimals"

export default function InterestingDetails() {
  const { name } = useParams()
  const {imageName, imageLink, link, credit, description} = interestingAnimals[name]
  console.log(`../images/${imageName}`)
  return (
    <div>
      <h2>{name}</h2>
      <img src={`../images/${imageName}`}></img>
    </div>
  )
}