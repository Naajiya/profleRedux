import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { addNewProfile } from '../redux/profileSlice';
import { useSelector } from 'react-redux';
import { use } from 'react';



function Poll() {

  const allPorfs = useSelector(state => state.profileReducer)
  console.log(allPorfs)

  useEffect(() => {
    if (allPorfs) {
      const names = allPorfs?.find(item => item.name == "safa")?.bio
      console.log(names)
    }
  }, [])




  const [count, setCount] = useState(0)
  const [optTwo, setOptTwo] = useState(0)
  const [opThre, setOpThre] = useState(0)
  const [opFour, setOpFour] = useState(0)
  const now = 34

  const [click, setClick] = useState(true)

  const handleOnclil = () => {
    if (click) {
      setCount(count + 1)
    }

    setClick(false)
  }

  const hadleTwo = () => {
    if (click) {
      setOptTwo(optTwo + 1)
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
          className="mt-2 w-75 border-light"
          onClick={handleOnclil}
          now={count}
          label={`${count}%`}
        />
      </div>
      <div className="d-flex justify-content-center shadow">
        <p className="mt-1 fw-bold me-3 fs-5">Kerala :</p>
        <ProgressBar
          className="mt-2 w-50 border-light text-dark"
          onClick={hadleTwo}
          now={optTwo}
          label={`${optTwo}%`}
        />
      </div>
      <div className="d-flex justify-content-center">
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
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Poll