import React, { Component , useState } from 'react';
import Characters from './components/charactersCard';
import Episodes from './components/Home'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

import SearchForm  from './components/SearchForm'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}