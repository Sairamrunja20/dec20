import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Images from './images'

export default function App() {
  return (
    


    <BrowserRouter>
    
    <Routes>

    <Route path="/" element={<Images />} />
        <Route path="/" element={<Images />} />

        <Route path="/" element={<Images />} />

        <Route path="/" element={<Images />} />


    </Routes>
    
    </BrowserRouter>
  )
}
