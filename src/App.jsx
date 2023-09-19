import { useEffect, useRef } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
// helpers
import { getTypeMode, setLightMode } from "./helpers/Utils"
// library
import _ from "lodash"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// layouts
import RootLayout from "./layouts/RootLayout"
import WorksLayout, { worksLoader } from "./layouts/WorksLayout"
// pages
import Home from "./pages/Home"
import WorksCategory from "./pages/WorksCategory"
import WorksAdvertCategory from "./pages/WorksAdvertCategory"
import WorksDetail from "./pages/WorksDetail"
import Contact, { contactAction, contactLoader } from "./pages/Contact"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="work" element={<WorksLayout />} loader={worksLoader}>
        <Route path=":category" element={<WorksCategory />} loader={worksLoader} />
        <Route path=":category/:subcategory" element={<WorksAdvertCategory />} loader={worksLoader} />
      </Route>
      <Route path="work/detail/:id" element={<WorksDetail />} />
      <Route path="contact" element={<Contact />} loader={contactLoader} action={contactAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  const effectCalled = useRef(true)
  const getRandInt = _.random(1, 3)

  useEffect(() => {
    // stop useEffect to trigger twice
    if (effectCalled.current) {
      effectCalled.current = false
      
      // localStorage
      if (localStorage.length < 1) {
        setLightMode()
      } else {
        document.body.classList.add(`${getTypeMode()}-mode`)
      }

      const setRandTheme = () => {
        document.body.classList.add(`theme${getRandInt}`)
      }

      const setRandFavicon = () => {
        document.querySelector(`[data-image="favicon"]`).href = `/favicon${getRandInt}.png`
      }

      setRandTheme()
      setRandFavicon()
    }
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
