import { Outlet } from "react-router-dom"

// Layouts
import Header from "./Header"
import Footer from "./Footer"

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
