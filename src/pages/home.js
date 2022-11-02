import React from 'react'

import '../styles/home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-containercalculadora">
        <div className="home-container1">
          <input
            type="text"
            placeholder="VALOR"
            className="home-textinput input"
          />
          <span className="home-text">Text</span>
        </div>
        <div className="home-container2">
          <button className="home-button button">Button</button>
          <button className="home-button1 button">Button</button>
          <button className="home-button2 button">Button</button>
          <button className="home-button3 button">Button</button>
          <button className="home-button4 button">Button</button>
          <input type="text" placeholder="placeholder" className="input" />
        </div>
        <button className="home-button5 button">Button</button>
        <button className="home-button6 button">Button</button>
      </div>
    </div>
  )
}

export default Home
