import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CardTemplate.css'
import CardTemplate from './CardTemplate'
import { Row, Col } from 'antd'
import uuidv4 from 'uuid/v4'

function Character(route) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getChar = async () => {
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
      
        <div>
                <Col className='gutter-row' span={10} offset={5} key={uuidv4()}>
                  <CardTemplate
                    name={data.data.name}
                    date={data.data.status}
                    image={data.data.image}
                    id={data.data.id}
                    st={data.data.status}
                    species= {data.data.species}
                  />
                </Col>
      </div>
    );
    
}
    
export default Character;