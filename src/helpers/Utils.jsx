// localStorage
const lsName = "TYPE_MODE"
const setTypeMode = (type) => {
  localStorage.setItem(lsName, type)
  document.body.classList.remove("dark-mode", "light-mode")
  document.body.classList.add(`${type}-mode`)
}

export const getTypeMode = () => localStorage.getItem(lsName)

export const setDarkMode = () => setTypeMode("dark")

export const setLightMode = () => setTypeMode("light")

// Others
export const isValidEmailAddress = (email) => {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
  return pattern.test(email)
}

export const isValidPhoneNumber = (phone) => {
  const pattern = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/i)
  return pattern.test(phone)
}

// animate on view
export const animateOnView = (delayDur = 0.01) => {
  const elems = document.querySelectorAll(".animateOnView")
  if (elems.length) {

    elems.forEach((el, index) => {
      // set delay
      el.style.animationDelay = `${delayDur * index}s`

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio) {
            // set animation
            el.classList.add(`anim-${el.dataset.anim}`)      
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.5 })
      observer.observe(el)
    })
  }
}