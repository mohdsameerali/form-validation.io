import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import ShowData from './Components/ShowData'
import Form from './Components/Form'



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route  path='/ShowData' element={<ShowData/>}></Route> 
    </Routes>
    </>
  )
}
