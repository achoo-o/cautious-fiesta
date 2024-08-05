import { useState } from 'react'
import animals from '../../data/animals'
import Search from './Search'
import List from './List'

export default function Top100Animals() {
  const [searchResults, setResults] = useState(animals)

  return (
    <div className="main">
      <h2>Top 100 Animals</h2>
      <Search setResults={setResults}/>
      <List animals={searchResults} />
    </div>
  )
}


