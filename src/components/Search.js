import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import {useState, useEffect} from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4'

import './CharacterDetails.css'
import Episodes from './Home';
import Episode from './EpisodesOfCharacter'
import { Link } from 'react-router-dom'
import Location from './Location'
import Char from './charactersCard'

function Character(route) {
    console.log(route.id)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
    const [characters, setChar] = useState([])
    const [epis, setEpis] = useState([])
    const [loca, setLoca] = useState([])
    var suma =[]

    const getChar = async () => {
        const result = await axios(
            `https://rickandmortyapi.com/api/character/?name=${route.match.params.query}`
        );
        setChar(result.data.results);
        console.log('result:', result)
        console.log('next',result.data.info.next)
        for (var x = 0; x < result.data.info.pages; x++){
            console.log(result.data.info.pages)
            let resultado = await axios(
                `https://rickandmortyapi.com/api/character/?page=${x+1}&name=${route.match.params.query}`
            );
            suma = suma.concat(resultado.data.results);
            console.log('result:', suma)

        }
        setChar(suma)
        
        setLoading(false);
    };

    const getEpis = async () => {
            const result = await axios(
                `https://rickandmortyapi.com/api/episode/?name=${route.match.params.query}`
            );
            setEpis(result.data.results);
            setLoading2(false);
        };

    const getLoca = async () => {
        const result = await axios(
            `https://rickandmortyapi.com/api/location/?name=${route.match.params.query}`
        );
        setLoca(result.data.results);
        setLoading3(false);
    };

    useEffect(() => {
        getChar();
        getEpis();
        getLoca();
    }, []);

    return (loading &&loading2 &&loading3 )  ? (<h1/>):  (

        console.log('char', characters),
        
      
            <div>   
                <center>  
                <h1>Search Results</h1>
                <h2>Characters</h2>
                </center> 
            <Row gutter={24}>
                {
                  characters.map(rou => {
                    return (
                      <Char route = {rou} />
                    )
                  })
                }
            </Row>  

            <center>
            <p/>
            <h2>Episodes</h2>
            {epis.map((episode) => (
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
            <p/>
            <h2>Locations</h2>     
            {loca.map((location) => (
                <div class="card">
                <div class="card-body">
                    {console.log(location.id)}
                    <Link to={`/location/${location.id}`}>
                    <a className="navbar-brand" href = '#'>{location.name}</a>
                    </Link>
                    <h6 class="card-subtitle mb-2 text-muted">{location.type}</h6>
                    <p class="card-text">{location.dimension}</p>
                </div>
                </div>
            
            ))}
            </center>
            </div>
            

    );
    
}
    
export default Character;