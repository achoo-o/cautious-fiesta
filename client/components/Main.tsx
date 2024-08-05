import { Link } from 'react-router-dom'

export default function Main() {

  return (
    <div className="menu-container margin30">
      <div className="menu-item textCenter">
      <Link to={'top-100-animals'}>
      <p>Top 100 Animals</p>
      </Link>
      </div>
    </div>
  )
}