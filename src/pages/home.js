import React from 'react'
import '../styles/home.css'
import '../styles/button.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-containercalculadora">
        <div className="home-container1">
        <p className="home-text">1111</p>
          <input
            type="number"
            placeholder="VALOR"
            className="home-textinput"
          />
        </div>
        <div className="home-container2">
          <button className="home-button btn-act">5%</button>
          <button className="home-button1 btn-act">10%</button>
          <button className="home-button2 btn-act">20%</button>
          <button className="home-button3 btn-act">30%</button>
          <button className="home-button4 btn-act">40%</button>
          <input type="number" placeholder="  %" className="input" />
        </div>
        <div className="buttons5-6">
          <button className="home-button5 btn2-act">Aumentar</button>
          <button button className="home-button6 btn2-act">Diminuir</button>
        </div>
      </div>
    </div>
  )
}

export default Home
