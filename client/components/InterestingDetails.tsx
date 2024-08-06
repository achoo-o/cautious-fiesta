import { useParams } from 'react-router-dom'
import interestingAnimals from '../../data/interestingAnimals'

export default function InterestingDetails() {
  const { name } = useParams()
  const { imageName, imageLink, credit, description } = interestingAnimals[name]

  if (!name) return <p>Error - animal not found.</p>
  let prettyName = name.match(/[A-Z][a-z]+/g)?.join(' ') //DesertRainFrog -> Desert Rain Frog
  return (
    <div className="text-center">
      <h2>{prettyName}</h2>
      <img src={`/images/${imageName}`}></img>
      <p>
        <a href={imageLink}>Image</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href={credit}>Credit</a>
      </p>
      <p>{description}</p>
    </div>
  )
}
