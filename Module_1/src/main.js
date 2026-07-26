import './style.css'
import gsap from 'gsap'


gsap.fromTo('.box',
  {
    x : 0
  },
  
  
  {
  delay: 0.6,
  x : 400,
  y : 200,
  duration: 1,

})