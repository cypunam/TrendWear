import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProfilePage from './Pages/ProfilePage'
import ContactUsPage from './Pages/ContactUsPage'
import ErrorPage from './Pages/ErrorPage'

export default function App() {
    return (
        <BrouserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/profile/:name?/:dsg?/:salary?' element={<ProfilePage />} />
                <Route path='/contactus' element={<ContactUsPage />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrouserRouter>
    )
}
