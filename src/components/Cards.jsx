import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardAvatar from '../assets/addss.png'
import { addNewProfile } from '../redux/profileSlice';
import { useSelector } from 'react-redux';



function Cards() {
  const profDetls = useSelector(state => state.profileReducer)
  console.log(profDetls)
  return (
    <>
      {
        profDetls?.length > 0 ?
          profDetls.map(prof => (
            <Card className='mb-5 d-flex flex-colum justify-content-center align-items-center' style={{ width: '14rem' }}>
              <Card.Img style={{ width: '180px', height: '150px' }} className='img-fluid ' variant="top" src={CardAvatar} />
              <Card.Body className='text-center' style={{marginTop:'-50px'}}>
                <Card.Title >{prof.name}</Card.Title>
                <Card.Text>
                  {prof.bio}
                </Card.Text>
                {prof.email}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ))
          :
          <div>no profiles added</div>
   }

    </>
  )
}

export default Cards