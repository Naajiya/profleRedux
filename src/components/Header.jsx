import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
   <>
    <Navbar className="bg-body-primary border border-3">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold text-warning'>
           
           Profile Viewer
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Header