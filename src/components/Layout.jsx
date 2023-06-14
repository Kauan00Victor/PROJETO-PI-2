import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import './Layout.css'
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {

  return (
    <>
    <Header className="Header1" />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
        <Footer />
    </>
  )
}