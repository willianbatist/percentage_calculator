import React from 'react'

import '../styles/home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-containercalculadora">
        <div className="home-container1">
        <span className="home-text">Text</span>
          <input
            type="text"
            placeholder="VALOR"
            className="home-textinput"
          />
        </div>
        <div className="home-container2">
          <button className="home-button button">5%</button>
          <button className="home-button1 button">10%</button>
          <button className="home-button2 button">20%</button>
          <button className="home-button3 button">30%</button>
          <button className="home-button4 button">40%</button>
          <input type="text" placeholder="placeholder" className="input" />
        </div>
        <div className="buttons5-6">
          <button className="home-button5 button">Aumentar</button>
          <button button className="home-button6 button">Diminuir</button>
        </div>
      </div>
    </div>
  )
}

export default Home
