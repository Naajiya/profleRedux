import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


function Poll() {
 
  const [count,setCount]=useState(0)
  const [optTwo,setOptTwo]=useState(0)
  const [opThre,setOpThre]=useState(0)
  const [opFour,setOpFour]=useState(0)
  const now = 34

  const handleOnclil=()=>{
    setCount(count+1)
  }

  const hadleTwo=()=>{
    setOptTwo(optTwo+1)
  }
  return (
    <>
      <div>
        <div >  

          <div className='p-2'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremq Pariatur, laudantium alias?</h3>
          </div>
          <div className='d-flex justify-content-center shadow  '>
            <div className=' d-flex w-75'>
              <p className='mt-1 fw-bold me-3 fs-5'>Kerala :</p>
              <ProgressBar className='mt-2 w-75 border-light' onClick={handleOnclil}  now={count} label={`${count}%`} />
            </div>
          </div>
          <div className='d-flex justify-content-center shadow'>
            <p className='mt-1 fw-bold me-3 fs-5'>Kerala :</p>
            <ProgressBar  className='mt-2 w-50 border-light' onClick={hadleTwo} now={optTwo} label={`${optTwo}%`} />
          </div>
          <div className='d-flex justify-content-center'>
            <p className='mt-1 fw-bold me-3 fs-5'>Kerala :</p>
            <ProgressBar className='mt-2 w-50 border-light shadow' now={now} label={`${now}%`} />
          </div>
          <div className='d-flex justify-content-center'>
            <p className='mt-1 fw-bold me-3 fs-5'>Kerala :</p>
            <ProgressBar className='mt-2 w-50 border-light shadow' now={now} label={`${now}%`} />
          </div>
          <div>
            <input type="range" min={0} max={100} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Poll