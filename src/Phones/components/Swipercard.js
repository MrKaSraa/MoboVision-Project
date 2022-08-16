import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import {AiFillApple} from 'react-icons/ai'
import {AiFillAndroid}from 'react-icons/ai'
export default function Swipercard(props) {
  return (
    <Card className='card my-4' style={{ width: '18rem' }}>
    <Card.Img variant="top"style={{width:'100%',height:'12rem'}} className='img-card ' src={props.img} />
    <Card.Body>
      <Card.Title className='title-card title-card1'>{props.icon}</Card.Title>
      <Card.Title  className='title-card'>{props.title}</Card.Title>
    
    </Card.Body>
    
    <Card.Body className='card-body-footer-slider'>
   
    <p className='p-slider pt-2'>{props.discount}</p>
      <Link className='card-link-slider pt-2' to={`/phones/${props.id}`}>مشخصات</Link>
    </Card.Body>
  </Card>
  )
}
