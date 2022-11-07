import React, { useState} from 'react';
import { handleButtonsEvents, handleInputChange, handleInput } from '../hooks/buttons';
import '../styles/home.css';
import '../styles/button.css';

const Home = (props) => {
  const [percentage, setPercentage] = useState(0);
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(0);

  console.log(typeof percentage);

  function percentageCalculation(e, number, percentageValue) {
    const value = e.target.value;
    if (value === 'Aumentar') {
      let sum = (Number(number) * Number(percentageValue)/100) + Number(number);
      setResult(sum);
    }
    if (value === 'Diminuir') {
      let sum = Number(number) - (Number(number) * Number(percentageValue)/100);
      setResult(sum);
    }
  }

  return (
    <div className="home-container">
      <div className="home-containercalculadora">
        <div className="home-container1">
        <p className="home-text">{ result }</p>
          <input
            onChange={ (e) => handleInputChange(e, setNumber) }
            value={ number }
            type="number"
            placeholder="VALOR"
            className="home-textinput"
          />
        </div>
        <div className="home-container2">
          <button type="button" onClick={ (e) => handleButtonsEvents(e, setPercentage) } className="home-button btn-act" value={ 5 }>5%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e, setPercentage) } className="home-button btn-act" value={ 10 }>10%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e, setPercentage) } className="home-button btn-act" value={ 20 }>20%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e, setPercentage) } className="home-button btn-act" value={ 30 } >30%</button>
          <button type="button" onClick={ (e) => handleButtonsEvents(e, setPercentage) } className="home-button btn-act" value={ 40 }>40%</button>
          <input onChange={ (e) => handleInput(e, setPercentage) } type="number" placeholder="     %" className="input"/>
        </div>
        <div className="buttons5-6">
          <button onClick={ (e) => percentageCalculation(e, number, percentage) } type="button" className="home-button5 btn2-act" value="Aumentar">Aumentar</button>
          <button onClick={ (e) => percentageCalculation(e, number, percentage) } type="button" className="home-button6 btn2-act" value="Diminuir">Diminuir</button>
        </div>
      </div>
    </div>
  )
}

export default Home
