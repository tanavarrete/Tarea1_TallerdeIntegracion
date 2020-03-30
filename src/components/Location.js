import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './CardTemplate.css'
import CardTemplate from '../components/CardTemplate'
import { Row, Col, Tag } from 'antd'
import uuidv4 from 'uuid/v4'

function Location(route) {
    console.log(route)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getChar = async () => {
        console.log('searching...');
        console.log('route:', route);

        const result = await axios(
            route.route
        );

        console.log('result:', result);

        setData(result);

        setLoading(false);
  };


    useEffect(() => {
      getChar();
    }, []);

    return loading ? (<h1/>):  (
      <div>
        <div><Link to={`/location/${data.data.id}`}>

            <a className="navbar-brand" href = '#'>{data.data.name}</a>
        </Link>
      </div>
      </div>
    )
    ;
    
}
    
export default Location;