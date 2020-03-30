import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CardTemplate.css'
import CardTemplate from './CardTemplate'
import { Row, Col } from 'antd'
import uuidv4 from 'uuid/v4'
import Character from './charactersCard'
import './CharacterEpisode.css'

function Episode(route) {
    console.log(route.id)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [characters, setChar] = useState([])

    const getEpisode = async () => {
        console.log('searching...');
        console.log('route:', route.match.params.id);

        const result = await axios(
            `https://rickandmortyapi.com/api/episode/${route.match.params.id}`
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
      
        <div>
            <div class="card">
              <div class="card-body">
                <a className="navbar-brand" href = '#'>{data.name}</a>
                <h6 class="card-subtitle mb-2 text-muted">{data.air_date}</h6>
                <p class="card-text">{data.episode}</p>
              </div>
            </div>
            <div>
              <Row>
                <Col span={12} offset={6}>
                  <h1 className='title'> Characters </h1>
                </Col>
              </Row>
              <Row gutter={24}>
                {
                  data.characters.map(rou => {
                    return (
                      <Character route = {rou} />
                    )
                  })
                }
              </Row>
            </div>
        </div>
    );
    
}
    
export default Episode;