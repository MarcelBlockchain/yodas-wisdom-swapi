import React from 'react'
import './App.scss'
import yodaForce from './assets/yoda_force.jpg'

function App (): JSX.Element | null {
  // Star generating code from: https://codepen.io/christopherkade/pen/rJVPjz
  // Sets the number of stars we wish to display
  const numStars = 100

  // For every star we want to display
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    const xy = getRandomPosition()
    star.style.top = xy[0].toString() + 'px'
    star.style.left = xy[1].toString() + 'px'
    document.body.append(star)
  }

  // Gets random x, y values based on the size of the container
  function getRandomPosition (): number[] {
    const y = window.innerWidth
    const x = window.innerHeight
    const randomX = Math.floor(Math.random() * x)
    const randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
  }

  return (
    <div className='App'>
      <header className='App-header' />
      <body>
        <div className='name-bubbles-container'>
          <div className='name-bubble'>
            <p>Luke</p>
          </div>
          <div className='name-bubble'>
            <p>Leia</p>
          </div>
          <div className='name-bubble'>
            <p>C3-PO</p>
          </div>
          <div className='name-bubble'>
            <p>Vader</p>
          </div>
          <div className='name-bubble'>
            <p>Vader</p>
          </div>
          <div className='name-bubble'>
            <p>Vader</p>
          </div>
          <div className='name-bubble'>
            <p>Vader</p>
          </div>
          <div className='name-bubble'>
            <p>Vader</p>
          </div>
          <div className='name-bubble'>
            <p>Vader</p>
          </div>
        </div>
        <img className='yoda-image' src={yodaForce} alt='yoda raising his hand to use the force' />
      </body>
    </div>
  )
}

export default App
