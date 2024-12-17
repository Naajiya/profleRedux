import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Header() {
  return (
   <>
    <Navbar className="bg-body-primary border border-3">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold text-warning'>
           
           Profile Viewer
          </Navbar.Brand>
        <Link to={'/favourite'}> <button className='btn btn-warning p-1'> <i class="fa-solid fa-user-plus"></i></button></Link>
        </Container>
      </Navbar>
   </>
  )
}

export default Header