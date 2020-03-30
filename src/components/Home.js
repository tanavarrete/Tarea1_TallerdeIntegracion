import React from 'react'
import  { Component , useState } from 'react';
import { Link } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

class Home extends Component {
  state = {
    characters: [],
    episodes: [],
    episodes2: []
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/episode/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ episodes: data.results })
      console.log(this.state.episodes)
    })
    .catch(console.log)
    fetch("https://rickandmortyapi.com/api/episode?page=2")
    .then(res => res.json())
    .then((data) => {
      this.setState({ episodes2: data.results })
      console.log(this.state.episodes2)
    })
    .catch(console.log)
    console.log('si se pudo2')
  }

  render() {
    return (
      <div>

        <SearchForm/>
        <center><h1>Episodes List</h1></center>
        <Epis episodes={this.state.episodes} />
        <Epis episodes={this.state.episodes2} />
      </div>
      
    );
  }
}
const Epis = ({ episodes }) => {
  return (
    <div>
      {episodes.map((episode) => (
        <div class="card">
          <div class="card-body">
            {console.log(episode.id)}
            <Link to={`/episode/${episode.id}`}>
            <a className="navbar-brand" href = '#'>{episode.name}</a>
            </Link>
            <h6 class="card-subtitle mb-2 text-muted">{episode.air_date}</h6>
            <p class="card-text">{episode.episode}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Home