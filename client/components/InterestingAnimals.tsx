import { Link } from "react-router-dom"
import interestingAnimals from "../../data/interestingAnimals"

const animalNames = Object.keys(interestingAnimals)

export default function InterestingAnimals() {
  

  return (
    <div className="textCenter">
      <h1>Some Cool Animals</h1>
      <p>Below are 8 animals I think are cool and/or cute. Click on each one to learn a little more about them!</p>
      {animalNames.map((name, i) => {
        let spacedName = name.match(/[A-Z][a-z]+/g)
        if (spacedName)
        return (
        <Link to={name}>
          <h3 key={i}>{spacedName.join(" ")}</h3>
        </Link>)
      })}
      <h2>A Few Interesting Animals</h2>
      <p>Here are some peculiar animals you might not know about...</p>
    </div>
  )
}