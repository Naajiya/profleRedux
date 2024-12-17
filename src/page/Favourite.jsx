import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import CardAvatar from '../assets/addss.png'
import { useSelector } from 'react-redux';




function Favourite() {

    const fav= useSelector((state)=>state.favrtReducer)
    console.log("fav",fav)
  return (
    <>
    
    <Container>
        <Row>
            <Col>
            <Card className='mb-5 d-flex flex-colum justify-content-center align-items-center' style={{ width: '19rem' }}>
              <Card.Img style={{ width: '180px', height: '150px' }} className='img-fluid ' variant="top" src="" />
              <Card.Body className='text-center' style={{ marginTop: '-50px' }}>
                <Card.Title >jjj</Card.Title>
                <Card.Text >
                <p className='fw-bold'>hh</p>
                 
                 
                </Card.Text>
                
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              {/* <div className='d-flex justify-content-end w-75 m-2'> <i onClick={()=>handleClick(prof)} class="fa-solid fa-bookmark"></i></div> */}
            </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Favourite