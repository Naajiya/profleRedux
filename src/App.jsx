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
import { useDispatch } from 'react-redux'





function App() {

  const dispatch = useDispatch()

  const [details, setDetails] = useState({ name: '', email: '', bio: '' })
  console.log(details)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=()=>{
    const {name,email,bio}=details
    if(name && email && bio){
      console.log(name,email,bio)
      dispatch(addNewProfile(details))
      handleClose()
      setDetails({name:'',email:'',bio:''})
      alert('successfully added')

    }else{
      alert('adding failed')
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Row>
            <Button onClick={handleShow} className='w-25 m-3' variant="outline-light">add New Profile</Button>

          </Row>
          <Col>
            <Cards />
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FloatingLabel
              controlId="floatingInput"
              label="name"
              className="mb-1"
            >
              <Form.Control  onChange={(e)=>setDetails({...details,name:e.target.value})} type="text" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-1"
            >
              <Form.Control onChange={(e)=>setDetails({...details,email:e.target.value})} type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="bio"
              className="mb-3"
            >
              <Form.Control onChange={(e)=>setDetails({...details,bio:e.target.value})} type="email" placeholder="name@example.com" />
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
