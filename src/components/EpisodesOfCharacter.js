import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './CardTemplate.css'
import CardTemplate from '../components/CardTemplate'
import { Row, Col, Tag } from 'antd'
import uuidv4 from 'uuid/v4'

function Episode(route) {
    console.log(route)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getChar = async () => {
        console.log('searching...');
        console.log('route:', route);

        const result = await axios(
            route.route
        );
        setData(result);

        setLoading(false);
  };


    useEffect(() => {
      getChar();
    }, []);

    return loading ? (<h1/>):  (
      
        <div><Link to={`/episode/${data.data.id}`}>
            <Tag key={data.data.id}>{data.data.name}</Tag>
        </Link>
      </div>
    )
    ;
    
}
    
export default Episode;