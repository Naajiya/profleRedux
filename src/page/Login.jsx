import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function Login() {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  // console.log(name)

  const navigate=useNavigate()

  const [nameFind, setNameFind] = useState(false)
  const [malFind, setMailFind] = useState(false)

  const allPorfs = useSelector(state => state.profileReducer)
  // console.log(allPorfs)

  const handleName = (name) => {
    if (!allPorfs || allPorfs.length === 0) {
      console.log("allPorfs is empty or undefined");
      setNameFind(true);
      return;
    }
  
    const ok = allPorfs.find((m) => m.name === name);
  
    if (ok) {
      console.log("Match found:", ok);
      setName(ok);
    } else {
      console.log("No match found for name:", name);
      setNameFind(true);
    }
  };
  

  const handleMail = (mal) => {
    const m = allPorfs?.find(f => f.emails == mal)
    console.log(m)
    setMail(m)
    if (m) {
      console.log("ok")
    } else {
      setMailFind(true)
    }
  }


  const handleOK = () => {
    console.log(name)
    console.log(mail)
    console.log(name == mail)
    if(name && mail){
      if (name == mail) {
        navigate('/poll')
      } else {
        alert("name and password not match")
      }
    }else{
      alert("please enter mail and password")
    }
    
  }


  return (
    <>

      <div className='p-4 d-flex justify-content-center'>
        <div className='p-4 w-50 border border-3 text-center'>
          <h3 className='text-center'>Check You are a user or Not</h3>
          <FloatingLabel controlId="floatingPassword" label="Name" className='mb-3'>
            <Form.Control onBlur={(e) => handleName(e.target.value)} type="text" placeholder="Password" />
            {
            nameFind &&
            <p className='text-danger'>invalid name</p>
          }
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingPassword1" label="Email" className='mb-3'>
            <Form.Control onBlur={(e) => handleMail(e.target.value)} type="email" placeholder="Password" />
            {
            malFind && <p className='text-danger'>invalid email</p>
          }
          </FloatingLabel>
          
          <Button onClick={handleOK} variant="light">Go to Poll</Button>
        </div>
      </div>

    </>
  )
}

export default Login