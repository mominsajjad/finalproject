import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AppLayout() {
    console.log(Outlet)
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
