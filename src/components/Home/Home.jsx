import React from 'react'
import './Home.css'
import Logo from '../../img/Logo.png'
import Video1 from '../../vid/Video1.mp4'


export default function Home() {
  
  return (
    <div>
        <div id="nav">
            <img src={Logo} alt="logo" />
            <a href="/"><h4>Home</h4></a>
            <a href="/"><h4>About Us</h4></a>
            <a href="/"><h4>Cars</h4></a>
            <a href="/"><h4>Contact Us</h4></a>
        </div>
        <video src={Video1} autoPlay muted loop></video>
        
        <div id="main">
          <div id="page1">
            <h1>Eat. Drink. Drive !</h1>
            <h4>Unlock the Journey. Rent with Ease</h4>
            <p>Unleash your journey with our user-friendly car rental website. Explore new horizons, embrace convenience, and experience unforgettable adventures. Your perfect ride awaits—let's embark on an extraordinary travel experience together.</p>
          </div>
        </div>
    </div>
  )
}
