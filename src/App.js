import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

import Welcome from './components/Welcome'
import Search from './components/Search'
import Movie from './components/Movie'
import Navbar from './components/Navbar'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/project-2" component={Welcome} />
      <Route exact path='/project-2/search' component={Search} />
      <Route exact path='/project-2/search/:movieId' component={Movie} />
    </Switch>
  </BrowserRouter>
}

export default App