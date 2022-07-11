import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  return (
    <Router>
    <Header/>
<Route exact path="/">
<Filter/>
  <Countries/>
</Route>
  </Router>
  )
}


export default App
