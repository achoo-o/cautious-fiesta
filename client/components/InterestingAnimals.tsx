import interestingAnimals from "../../data/interestingAnimals"

const animalNames = Object.keys(interestingAnimals)

export default function InterestingAnimals() {
  

  return (
    <div className="textCenter">
      <h1>Some Cool Animals</h1>
      <p>Below are 8 animals I think are cool and/or cute. Click on each one to learn a little more about them!</p>
      {animalNames.map((name, i) => {
        return <h3 key={i}>{name}</h3>
      })}
      <h2>A Few Interesting Animals</h2>
      <p>Here are some peculiar animals you might not know about...</p>
    </div>
  )
}