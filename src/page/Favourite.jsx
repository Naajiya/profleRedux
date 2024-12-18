import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import CardAvatar from '../assets/addss.png'
import { useSelector } from 'react-redux';




function Favourite() {

  const [favrt, setFavrt] = useState([])

  const fav = useSelector((state) => state.favrtReducer)
  console.log("fav", fav)


  const getAction = () => {
    const fvr = fav.map(innerAry => innerAry).flat()
    console.log(fvr)
    setFavrt(fvr)
  }

  useEffect(() => {
    getAction()
  }, [fav])


  return (
    <>

      <Container>
        <Row className='mt-4 pt-4'>
          {
            favrt?.length > 0 ?
              favrt?.map(item => (
                <Col lg={4}>
                  <Card className='mb-5 d-flex flex-colum justify-content-center align-items-center' style={{ width: '19rem' }}>

                    <Card.Body className='text-center' >
                      <Card.Title  >{item.name}</Card.Title>
                      <Card.Text >
                        <p className='fw-bold'>{item.emails}</p>
                        <p className=''>{item.bio}</p>


                      </Card.Text>

                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    {/* <div className='d-flex justify-content-end w-75 m-2'> <i onClick={()=>handleClick(prof)} class="fa-solid fa-bookmark"></i></div> */}
                  </Card>
                </Col>

              ))


              :
              <div className='text-light'>Oopss.. There is no Favourites</div>

          }
        </Row>
      </Container>
    </>
  )
}

export default Favourite