interface Props {
  animals: string[]
}

function List({animals}: Props) {
  return (
    <div className="gridList">
      <ul className="gridList">
        {animals.map((animal, i) => (<li key={i} className="gridlist">{animal}</li>))}
      </ul>
    </div>
  )
}

export default List