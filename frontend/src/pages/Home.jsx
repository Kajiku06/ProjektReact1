import React from 'react'
import Fridge from '../components/Home_C/Fridge'
import Lunch from '../components/Home_C/Lunch'
import Recipe from '../components/Home_C/Recipe'
import '../styles/pages.css'

function Home() {
  return (
    <div id='id'>
      <Recipe/>
      <Fridge/>
      <Lunch/>
    </div>
  )
}

export default Home
