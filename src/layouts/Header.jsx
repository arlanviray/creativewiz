import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
// library
import _ from "lodash"
// assets
import cwizLogoDark from "../assets/cwiz-logo-dark.png"
import cwizLogoLight from "../assets/cwiz-logo-light.png"
import iconDarkMode from "../assets/icon-dark-mode.svg"
import iconLightMode from "../assets/icon-light-mode.svg"
// helpers
import { getTypeMode, setDarkMode, setLightMode } from "../helpers/Utils"

function Header() {
  const location = useLocation()
  const [scrollPos, setScrollPos] = useState("")
  const [activeNav, setActiveNav] = useState("")
  const [typeMode, setTypeMode] = useState(getTypeMode())
  const [typeModeSwitcher, setTypeModeSwitcher] = useState(true)
  const [hamburgerMenu, sethamburgerMenu] = useState("")
  const isLightMode = typeMode === "light"

  useEffect(() => {
    // console.log("Location changed")
    const headerHeight = document.querySelector("header").getBoundingClientRect().height
    const currPage = _.split(window.location.pathname, "/")[1]
    setActiveNav(currPage)

    // add class to main
    const mainTag = document.querySelector("main")
    mainTag.removeAttribute("class")
    mainTag.classList.add(`${_.isEmpty(currPage) ? "home" : currPage}`)

    // on scroll event, show/hide header
    let oldScrollY = window.scrollY
    window.addEventListener("scroll", () => {
      if (oldScrollY < window.scrollY && window.scrollY > headerHeight) {
        setScrollPos("hide-down")
      } else {
        setScrollPos("show-up")
      }
      oldScrollY = window.scrollY
    })
  }, [location]) // triggers everytime URL changed

  const handleHamburgerMenu = () => {
    if (window.innerWidth >= 640) return

    if (_.isEmpty(hamburgerMenu)) {
      sethamburgerMenu("is-active")
      document.querySelector("html").classList.add("no-scroll")
    } else { 
      sethamburgerMenu("")
      document.querySelector("html").classList.remove("no-scroll")
    }
  }

  const handleTypeMode = () => {
    if (isLightMode) {
      setDarkMode()
      setTypeMode("dark")
    } else {
      setLightMode()
      setTypeMode("light")
    }
    
    setTypeModeSwitcher(false)
  }

  return (
    <header className={scrollPos}>
      <div className="content">
        <div className="logo">
          <a href="/"><img src={isLightMode ? cwizLogoDark : (_.isEmpty(typeMode) ? cwizLogoDark : cwizLogoLight)} width="156" height="30" className="noresp noselect" /></a>
          <div className="logo-circle theme-bg"></div>
        </div>
        <div className="navigation">
          <nav>
            {/* combine with router "Link" for active state on child pages */}
            <NavLink onClick={handleHamburgerMenu} className="btn-nav" to="/">Home</NavLink>
            <Link onClick={handleHamburgerMenu} className={"btn-nav"+ (activeNav === "work" ? " active" : "")} to="work/all">Work</Link>
            <NavLink onClick={handleHamburgerMenu} className="btn-nav" to="contact">Contact</NavLink>
            
            {/* <div className="type-mode" onClick={handleTypeMode}>
              <img src={isLightMode ? iconDarkMode : iconLightMode} width={16} height={16} />
            </div> */}
            <div className="type-mode-switcher" data-init={typeModeSwitcher} onClick={handleTypeMode}>
              <div className="icon">
                <img src={iconLightMode} width={16} height={16} />
              </div>
              <div className="icon">
                <img src={iconDarkMode} width={16} height={16} />
              </div>
            </div>
          </nav>
        </div>
        <div className={"hamburger hamburger--squeeze "+ hamburgerMenu} onClick={handleHamburgerMenu}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
      <div className="bottom-outline theme-bg"></div>
    </header>
  )
}

export default Header