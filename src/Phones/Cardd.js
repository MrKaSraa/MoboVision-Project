import React from 'react'
import Card from 'react-bootstrap/Card';
import {AiFillApple} from 'react-icons/ai'
import {AiFillAndroid}from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function card(props) {
  return (
    <Card className='card my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top"style={{width:'100%',height:'12rem'}} className='img-card ' src={props.image} />
            <Card.Body>
              <Card.Title className='title-card title-card1'>{props.icon}</Card.Title>
              <Card.Title  className='title-card'>{props.title}</Card.Title>
              <Card.Text className='card-text my-3' >
             {props.text}
              </Card.Text>
            </Card.Body>
            
            <Card.Body className='card-body-footer'>
   
                  <Link className='card-link' to={`/phones/${props.id}` }>مشخصات</Link>
              
            </Card.Body>
          </Card>

    
  )
}
