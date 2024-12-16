import { useState } from 'react'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './components/Cards'
import Header from './components/Header'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addNewProfile } from './redux/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { emailVerification } from './redux/emailSlice'
import { addtwofavourite } from './redux/favrtSlice'





function App() {

  const valid = useSelector(state => state.mailReducer.isValid)
  console.log('valid', valid)

  const mail = useSelector(state=>state.mailReducer.email)

  const dispatch = useDispatch()

  const [details, setDetails] = useState({ name: '', emails: '', bio: '' })
  console.log(details)

  const [updatessDetails,setUpdateDetails]=useState({})
  console.log("updteeee",updatessDetails)
  // validate and info in p tag 
  const [isMail,setisMail]=useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {

    if (valid) {
      console.log('ok in app.jsx')
       const updateDetails={...details,emails:mail}
       setUpdateDetails(updateDetails)
      setDetails(updateDetails)

      console.log(updateDetails)

      const { name, emails, bio } = updateDetails


      if (name && emails && bio) {
  
        console.log(name, emails, bio);
        dispatch(addNewProfile(updateDetails))
        handleClose()
        setDetails({ name: '', emails: '', bio: '' })
        alert('successfully added')
  
      }else{
        alert('failed to add')
      }


      
    }else{
      console.log('not okey')
      setisMail(true)
    }

   
  }


  


  const handleMail = (e) => {
    dispatch(emailVerification(e))



  }

  const handleChange=()=>{
    setisMail(false)
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Row>
            <Button onClick={handleShow} className='w-25 m-3' variant="outline-light">add New Profile</Button>

          </Row>
          <Row>
            <Cards />
          </Row>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            {/* Name */}
            <FloatingLabel
              controlId="floatingInput"
              label="name"
              className="mb-1"
            >
              <Form.Control onChange={(e) => setDetails({ ...details, name: e.target.value })} type="text" placeholder="name@example.com" />
            </FloatingLabel>

            {/* email */}
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-1"
            >
              <Form.Control onChange={handleChange} onBlur={(e) => handleMail(e.target.value)} type="email" placeholder="name@example.com" />
            </FloatingLabel>
           { 
           isMail &&
            <p className='text-danger'><i class="fa-solid fa-triangle-exclamation"></i> Enter valid mail</p>
            }

            {/* bio */}
            <FloatingLabel
              controlId="floatingInput"
              label="bio"
              className="mb-3"
            >
              <Form.Control onChange={(e) => setDetails({ ...details, bio: e.target.value })} type="text" placeholder="name@example.com" />
            </FloatingLabel>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              add profile
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>


    </>
  )
}

export default App
