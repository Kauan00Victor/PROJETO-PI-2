import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import './Layout.css'
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}