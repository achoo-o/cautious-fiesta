import { useState } from 'react'
import Search from './Search'
import List from './List'
import animals from '../../data/animals'

export default function Main() {
  const [searchResults, setResults] = useState(animals)

  return (
    <div className="main">
      <p>Body Content</p>
      <Search setResults={setResults}/>
      <List animals={searchResults} />
    </div>
  )
}