import { useState } from 'react'

export default function Search() {

  const [searchResults, setResults] = useState([""])

  function handleSearch(event:  React.FormEvent<HTMLInputElement>) {
    setResults([""])
  }

  return (
    <div>
      <p>{searchResults}</p>
      <form>
      <input onSubmit={handleSearch}/>
      <button type="submit">Search</button>
      </form>
    </div>
  )
}