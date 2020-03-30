import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Episode from './Episode'
import Character from './Character'
import EpisodeDetails from '../components/EpisodeDetails'
import LocationDetail from '../components/LocationDetail'
import Search from '../components/Search'



const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  <Route exact path='/episode/:id' render={
    props => (<Episode currentPage='Characters Results' {...props} />
  )} />
  <Route exact path='/character/:id' render={
    props => (<Character currentPage='Character Results' {...props} />
  )} />
  <Route exact path='/location/:id' render={
    props => (<LocationDetail currentPage='Character Results' {...props} />
  )} />

    <Route exact path='/search/:query' render={
        props => (<Search currentPage='Search Results' {...props} />
    )} />
  </Switch>
  
)

export default Routes