interface Props {
  animals: string[]
}

function List({animals}: Props) {
  return (
    <p>{animals.map((animal, i) => (<li key={i}>{animal}</li>))}</p>
  )
}

export default List