import React from "react"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Home from'./pages/Home'
import Movies from './pages/Movies'
import MoviesDetails from './pages/MovieDetail'
import SeatLayout from './pages/SeatLayout'
import MyBookings from "./pages/MyBookings"



const App = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MoviesDetails/>}/>
      <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
      <Route path="/myBookings" element={<MyBookings/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App