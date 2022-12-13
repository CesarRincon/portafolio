import React from 'react'
import Home from '../Home/Home'
import Landing from '../Landing/Landing'
import About from '../../components/About/About'
import Works from '../../components/Works/Works'
import Technologies from '../../components/Technologies/Technologies'

export default function Pages() {
  return (
    <div>
      <Landing />
      <About />
      <Technologies />
      <Works />
    </div>
  )
}
