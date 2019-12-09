import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="img" className="img"/>
      <p className="name">{props.name}</p>
      <p className="desc">{props.desc}</p>
      <p className="price">{props.price}</p>
      <button className="btn">Buy now</button>
    </div>
  )
}

export default Card;
