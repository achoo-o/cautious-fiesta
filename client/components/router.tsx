import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Main from './Main'
import Top100Animals from './Top100Animals'
import InterestingAnimals from './InterestingAnimals'
import InterestingDetails from './InterestingDetails'
import RoadEvents from './RoadEvents'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Main />} />
    <Route path='top-100-animals' element={<Top100Animals />} />
    <Route path='interesting-animals' element={<InterestingAnimals />} />
    <Route path='interesting-animals/:name' element={<InterestingDetails />} />
    <Route path='waka-kotahi/road-events' element={<RoadEvents />} />
  </Route>
)

export const router = createBrowserRouter(routes)