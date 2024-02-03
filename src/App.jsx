import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './components/TextBlock'
import Menu from './components/Menu'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)




  return (
    
    <div className="App">
      
      
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
      
        <ParallaxLayer offset={0} speed={0.25}>
        
         
          <div class="animation_layer parallax" id="artback"></div>
          
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        
        <Menu />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.25}>
          
          <TextBlock />
          
        </ParallaxLayer>
      </Parallax>
      
  </div>
      
  )
}

export default App
