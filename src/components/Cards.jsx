import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardAvatar from '../assets/addss.png'


function Cards() {
  return (
   <>
    <Card className='mb-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CardAvatar} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
   </>
  )
}

export default Cards