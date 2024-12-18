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
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'  
import Favourite from './page/Favourite'
import Poll from './page/Poll'





function App() {



  return (
    <>
      <Header />

      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Favourite/>} path='/favourite'/>
        <Route element={<Poll/>} path='/poll'/>
      </Routes>
     


    </>
  )
}

export default App
