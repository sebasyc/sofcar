import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { initNavbar } from './sections/navbar'

initNavbar()

AOS.init({
  easing: 'ease-out',
  once: true,
  offset: 100, 
})
