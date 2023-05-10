import {createRouter} from '../core/harim'
import Home from './Home'
import Movie from './Movie'

export default createRouter([
  {path: '#/', component: Home},
  {path: '#/movie', component: Movie},
])