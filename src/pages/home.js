import React, { useState} from 'react';
import { changeButtonClass } from '../hooks/buttons';
import '../styles/home.css';
import '../styles/button.css';

const Home = (props) => {
  const [percentage, setPercentage] = useState(0);
  const [inputPercentage, setInputPercentage] = useState('');
  console.log(percentage, 'o estado percentage');

  function removeChangeButtonClass() {
    const removeSelect = document.getElementsByClassName("home-button");
    for (let i = 0; i < removeSelect.length; i += 1) {
      removeSelect[i].classList.remove('btn-act-t');
      removeSelect[i].classList.add('btn-act');
    }
  }

  const handleButtonsEvents = (e) => {
    setPercentage(e.target.value);
    if (e.target.classList.value === 'home-button btn-act-t') {
      removeChangeButtonClass()
    }
    else {
      changeButtonClass(e)
    }
  }
  const handleInputChange = (e) => {
    setInputPercentage(e.target.value);
  }

  const handleInput = (e) => {
    removeChangeButtonClass()
    setPercentage(e.target.value);
  }

  return (
    <div className="home-container">
      <div className="home-containercalculadora">
        <div className="home-container1">
        <p className="home-text">1111</p>
          <input
            onChange={ (e) => handleInputChange(e) }
            value={ inputPercentage }
            type="number"
            placeholder="VALOR"
            className="home-textinput"
          />
        </div>
        <div className="home-container2">
          <button type="button" onClick={ (e) => handleButtonsEvents(e) } className="home-button btn-act" value={ 5 }>5%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e) } className="home-button btn-act" value={ 10 }>10%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e) } className="home-button btn-act" value={ 20 }>20%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e) } className="home-button btn-act" value={ 30 } >30%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e) } className="home-button btn-act" value={ 40 }>40%</button>
          <input onChange={ (e) => handleInput(e) } type="number" placeholder="     %" className="input"/>
        </div>
        <div className="buttons5-6">
          <button type="button" className="home-button5 btn2-act">Aumentar</button>
          <button type="button" className="home-button6 btn2-act">Diminuir</button>
        </div>
      </div>
    </div>
  )
}

export default Home
