export function initNavbar() {
  const header = document.querySelector('.top-header')
  const hamburger = document.querySelector('#hamburger')
  
  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 992) {
      header.classList.toggle('scrolled', window.scrollY > 50)
    }
  }, { passive: true })

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    header.classList.toggle('open')
  })

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      hamburger.classList.remove('open')
      header.classList.remove('open')
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
  
}