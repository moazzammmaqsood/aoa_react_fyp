import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Landingpage from "./components/LandingPage.js"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import Navbar from "./components/NavBar"
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
