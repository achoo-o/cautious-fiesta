import animals from '../../data/animals'
// import List from './List'

interface Props {
  setResults: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Search({ setResults }: Props) {

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResults(animals.filter((animal) => {
      return animal.toLowerCase().startsWith(event.target.value.toLowerCase())}))
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input onChange={handleChange} type="text" name="searchText" placeholder="Search for an animal"/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}