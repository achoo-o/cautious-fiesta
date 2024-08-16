import { Link } from 'react-router-dom'

export default function Main() {

  return (
    <div className="menu-container margin30">
      <div className="menu-item text-center margin30">
      <Link to={'top-100-animals'}>
      <p>Top 100 Animals</p>
      </Link>
      </div>
      <div className="menu-item text-center margin30">
      <Link to={'interesting-animals'}>
      <p>Highlighted Animals</p>
      </Link>
      </div>
      <div className="menu-item text-center margin30">
      <Link to={'roadevents'}>
      <p>Road Events (API)</p>
      </Link>
      </div>
    </div>
  )
}