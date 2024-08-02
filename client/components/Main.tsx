import { useState } from 'react'
import Search from './Search'
import List from './List'
import animals from '../../data/animals'

export default function Main() {
  const [searchResults, setResults] = useState(animals)

  return (
    <div className="main">
      <h2>Top 100 Animals</h2>
      <Search setResults={setResults}/>
      <List animals={searchResults} />
    </div>
  )
}