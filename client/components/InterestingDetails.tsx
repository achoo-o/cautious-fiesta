import { useParams } from "react-router-dom"
import interestingAnimals from "../../data/interestingAnimals"

export default function InterestingDetails() {
  const { name } = useParams()
  const {imageName, imageLink, credit, description} = interestingAnimals[name]
  console.log(`../images/${imageName}`)
  return (
    <div className="text-center">
      <h2>{name}</h2>
      <img src={`../images/${imageName}`}></img>
      <p>
      <a href={imageLink}>Image</a> | 
      <a href={credit}>Credit</a>
      </p>
      <p>{description}</p>
    </div>
  )
}