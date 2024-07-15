import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import * as Sentry from "@sentry/react"

const App = () => {
  return (
    <BrowserRouter>
   

    <Routes>
      <Route path='/' element= {<Home/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default Sentry.withProfiler(App)
