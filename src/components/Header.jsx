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

           <Link style={{textDecoration:'none'}} to={"/"}> Profile Viewer</Link>
          </Navbar.Brand>
          <div className='d-flex w-25 justify-content-between'>
            <Link to={'/favourite'}> <button className='btn btn-warning p-1'> <i class="fa-solid fa-user-plus"></i></button></Link>
            <Link to={"/poll"}><button className='btn btn-dark' style={{ padding: '1%' }}> <i class="fa-solid fa-square-poll-horizontal fa-2x"></i></button></Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header