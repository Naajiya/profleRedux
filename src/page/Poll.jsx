import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { addNewProfile } from '../redux/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { use } from 'react';
import { storeProgress, storeProgressTwo } from '../redux/progresSlice';






function Poll() {

  const dispatch= useDispatch()
  const valOne=useSelector(state=>state.progresReducer.progressone )
  const valTwo = useSelector(state=>state.progresReducer.progresstwo)

  const [count, setCount] = useState(0)
  const [optTwo, setOptTwo] = useState(0)
  const [opThre, setOpThre] = useState(0)
  const [opFour, setOpFour] = useState(0)
  const now = 34

  const [click, setClick] = useState(true)

  const handleOnclil = (e) => {
    e.preventDefault()
    if (click) {
      setCount(count + 1)
      const update=valOne+1
      dispatch(storeProgress(update))
    }

    setClick(false)
  }

  const hadleTwo = (e) => {
    e.preventDefault();
    if (click) {
      setOptTwo(optTwo + 1)
      const updTow=valTwo+1;
      dispatch(storeProgressTwo(updTow))
    }

    setClick(false)
  }
  return (
    <>
      <div>
  <div className="p-4">
    

    <div >
      <div className="p-2">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremq Pariatur, laudantium alias?</h3>
      </div>
      <div className="d-flex justify-content-center shadow">
        <p className="mt-1 fw-bold me-3 fs-5">Kerala :</p>
        <ProgressBar
          className="mt-2 w-50 border-light"
          onClick={(e)=>handleOnclil(e)}
          now={valOne}
          label={`${valOne}%`}
        />
      </div>
      <div className="d-flex justify-content-center shadow">
        <p className="mt-1 fw-bold me-3 fs-5">Goa :</p>
        <ProgressBar
          className="mt-2 w-50 border-light text-dark"
          onClick={(e)=>hadleTwo(e)}
          now={optTwo}
          label={`${optTwo}%`}
        />
      </div>
      {/* <div className="d-flex justify-content-cent er">
        <p className="mt-1 fw-bold me-3 fs-5">Kerala :</p>
        <ProgressBar
          className="mt-2 w-50 border-light shadow"
          now={now}
          label={`${now}%`}
        />
      </div>
      <div className="d-flex justify-content-center">
        <p className="mt-1 fw-bold me-3 fs-5">Kerala :</p>
        <ProgressBar
          className="mt-2 w-50 border-light shadow"
          now={now}
          label={`${now}%`}
        />
      </div> */}
    </div>
  </div>
</div>

    </>
  )
}

export default Poll