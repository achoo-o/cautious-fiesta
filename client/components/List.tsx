interface Props {
  animals: string[]
}

function List({animals}: Props) {
  return (
    <div className="grid-list">
      <ul className="grid-list">
        {animals.map((animal, i) => (<li key={i} className="grid-list">{animal}</li>))}
      </ul>
    </div>
  )
}

export default List