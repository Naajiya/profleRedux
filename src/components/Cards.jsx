import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardAvatar from '../assets/addss.png'
import { addNewProfile } from '../redux/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { addtwofavourite } from '../redux/favrtSlice';
import { ToastContainer, toast } from 'react-toastify';



function Cards() {
  const profDetls = useSelector(state => state.profileReducer.profiles)

  const dispatch = useDispatch()
  // const email=useSelector(state=>state.mailReducer.email)
  console.log("prompt for profils", profDetls)

  const handleClick = (prof) => {
    console.log('btn clikd')
    console.log('pro to add to fav', prof)
    dispatch(addtwofavourite(profDetls));
    toast("its saved!");
  }
  return (
    <>

      <Row>

        {profDetls?.length > 0 ?
          profDetls.map(prof => (
            <Col>
              <Card className='mb-5 d-flex flex-colum justify-content-center align-items-center' style={{ width: '19rem' }}>
                <Card.Img style={{ width: '180px', height: '150px' }} className='img-fluid ' variant="top" src={CardAvatar} />
                <Card.Body className='text-center' style={{ marginTop: '-50px' }}>
                  <Card.Title >{prof.name}</Card.Title>
                  <Card.Text >
                    <p className='fw-bold'>{prof.emails}</p>
                    {prof.bio}

                  </Card.Text>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <div className='d-flex justify-content-end w-75 m-2'> <i onClick={() => handleClick(prof)} class="fa-solid fa-bookmark"></i></div>
              </Card>
            </Col>
          ))
          :
          <div>no profiles added</div>}


        <ToastContainer
          position="top-center"
          autoClose={5000}
          
        />

      </Row>


    </>
  )
}

export default Cards