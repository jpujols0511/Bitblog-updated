import React from 'react'

import Card from './Blogcard';
import Started from './Getstarted';
import Navbar from './Navbar';
import Img from './Frontimg';
import Foot from './Footer';
import '../styles/bitblog.css';


const Frontpage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Img />
      <Foot />
      <Card />
    </div>
  )
}

export default Frontpage