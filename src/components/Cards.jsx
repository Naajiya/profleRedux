import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardAvatar from '../assets/addss.png'


function Cards() {
  return (
   <>
    <Card className='mb-5 d-flex flex-colum justify-content-center align-items-center' style={{ width: '14rem' }}>
      <Card.Img style={{width:'180px', height:'150px'}} className='img-fluid ' variant="top" src={CardAvatar} />
      <Card.Body>
        <Card.Title >Najiya KP</Card.Title>
        <Card.Text>
         bio
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
   </>
  )
}

export default Cards