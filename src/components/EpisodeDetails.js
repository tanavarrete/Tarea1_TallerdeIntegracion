/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag } from 'antd'
import {useState, useEffect} from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4'

import './CharacterDetails.css'
import Episodes from './Home';
import Episode from './EpisodesOfCharacter'

function EpisodeDetails(route) {
    console.log(route.id)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [characters, setChar] = useState([])

    const getEpisode = async () => {
        const result = await axios(
            `https://rickandmortyapi.com/api/episode/${route.match.params.id}`
        );
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
              <Col span={12} offset={1}>
                <h1>{data.name}</h1>
                <hr />
                <strong> Description: </strong>
            </Col>
            </Row>
    );
    
}
    
export default EpisodeDetails;