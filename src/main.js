import { initFavicon } from './sections/favicon'
import { imagesvg } from './assets/imagesvg'
import { icons } from './assets/icons'
import { initNavbar } from './sections/navbar'
import { initParallax } from './sections/parallax'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

initFavicon()
initNavbar()
initParallax()

AOS.init({
  easing: 'ease-out',
  once: true,
  offset: 100, 
})
