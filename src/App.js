import {BrowserRouter, Route} from 'react-router-dom'

import Puzzle from './components/Puzzle'

import LoginForm from './components/LoginForm'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/puzzle" component={Puzzle} />
  </BrowserRouter>
)

export default App
