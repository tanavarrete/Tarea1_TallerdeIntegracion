/* @flow */
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

function Character(route) {
    console.log(route.id)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [characters, setChar] = useState([])

    const getEpisode = async () => {
        console.log('searching...');
        console.log('route:', route.match.params.id);

        const result = await axios(
            `https://rickandmortyapi.com/api/character/${route.match.params.id}`
        );

        console.log('result:', result);

        console.log('characters:', result.data.characters);
        setData(result.data);

        setLoading(false);
    };
    const getChars = async () => {
      console.log('searching...');

  };


    useEffect(() => {
        getEpisode();
    }, []);

    return loading ? (<h1/>):  (
      
            <Row>
              <Col span={8} offset={1}>
                <img alt={data.name} width='85%' src= {data.image} />
              </Col>
              <Col span={12} offset={1}>
                <h1>{data.name}</h1>
                <hr />
                <h6><strong> Description: </strong></h6>
                <p> <strong>Status: </strong>  {data.status}</p>
                <p> <strong>Species:  </strong> {data.species}</p>
                <p> <strong>Type:  </strong> {data.type}</p>
                <p> <strong>Gender:  </strong> {data.gender}</p>
                <p> <strong>Origin :  </strong> {data.origin.name}</p>
                <p> <strong>Location :  </strong> {data.location.name}</p>
                <hr />
                <div className='genere'>
                    
                    <span className='genereTitle'>
                    <h6><strong> Episodes: </strong></h6>
                    </span>
                    {data.episode.map(epis => <Episode route = {epis} />)}
                </div>
                <hr />
                <div className='trailer'>
                    <h6><strong> Origin: </strong></h6>
                    <Location route = {data.location.url}/>
                
                </div>
            </Col>
            </Row>
    );
    
}
    
export default Character;