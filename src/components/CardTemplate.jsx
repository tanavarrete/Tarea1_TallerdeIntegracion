import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

type Props = {
  name: number,
  date: string, 
  specie: string,
  st: string,
  image: number, 
  id: number
}

const CardTamplate = ({ name, date, species, image, id, st }: Props) => (
  <Link to={`/character/${id}`}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 1 }}>
      <div className='custom-image'>
        <img alt={name} width='100%' src={image} />
      </div>
      <div className='custom-card'>
        <h3>{name}</h3>
        <p> Specie : {species} </p>
        <p> Status: {st} </p>
      </div>
    </Card>
  </Link>
)

export default CardTamplate