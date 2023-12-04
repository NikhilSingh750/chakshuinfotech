import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Contact from './Components/Contact'
import About from './Components/About'
import Services from './Components/Services'
import Product from './Components/Product'
import Website_Development from './Components/Services/Website_Development'
import Software_Development from './Components/Services/Software_Development'
import Digital_Marketing from './Components/Services/Digital_Marketing'
import Recruitment from './Components/Services/Recruitment'
import School_Management_Software from './Components/Products/School_Management_Software'
import E_Commerce from './Components/Products/E_Commerce'
import Billing_Software from './Components/Products/Billing_Software'

export default function App() {
  return (
    <div>

    <Header/>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Chakshu-Infotech-in-Moradabad' element={<HomePage/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Chakshu-infotech' element={<About/>}/>
        <Route path='/Products' element={<Product/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Website-Designing-Company-Moradabad' element={<Website_Development/>}/>
        <Route path='/Software-Company-Moradabad' element={<Software_Development/>}/>
        <Route path='/Digital-Marketing-Moradabad' element={<Digital_Marketing/>}/>
        <Route path='/Recruitment-Company-Moradabad' element={<Recruitment/>}/>
        <Route path='/School-Management-Software' element={<School_Management_Software/>}/>
        <Route path='E-commerce' element={<E_Commerce/>}/>
        <Route path='Billing-Software' element={<Billing_Software/>}/>
    </Routes>
    <Footer/>

    </div>
  )
}
