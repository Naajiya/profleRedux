import { useState } from 'react'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './components/Cards'
import Header from './components/Header'
import Button from 'react-bootstrap/Button';




function App() {

  return (
    <>
    <Header/>
      <Container>
        <Row>
          <Row>
          <Button className='w-25 m-3' variant="outline-light">add New Profile</Button>

          </Row>
          <Col>
          <Cards/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
