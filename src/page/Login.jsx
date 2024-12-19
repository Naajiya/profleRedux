import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';



function Login() {

  const [name,setName]=useState(false)
  // console.log(name)

  const allPorfs = useSelector(state => state.profileReducer)
  // console.log(allPorfs)

  const handleName=(name)=>{
    // console.log(name)
   const ok= allPorfs?.find(m=>m.name==name)
   console.log("lll")
   console.log("ok",ok.name)
   setName(ok)
   
  }


  return (
    <>

      <div className='p-4 d-flex justify-content-center'>
        <div className='p-4 w-50 border border-3 text-center'>
          <h3 className='text-center'>Check You are a user or Not</h3>
          <FloatingLabel controlId="floatingPassword" label="Name" className='mb-3'>
            <Form.Control onBlur={(e)=>handleName(e.target.value)} type="text" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword1" label="Email" className='mb-3'>
            <Form.Control type="email" placeholder="Password" />
          </FloatingLabel>
          <Button variant="light">Go to Poll</Button>
        </div>
      </div>

    </>
  )
}

export default Login