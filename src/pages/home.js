import React, { useState} from 'react'
import '../styles/home.css'
import '../styles/button.css'

const Home = (props) => {
  const [percentage, setPercentage] = useState(0);
  const [inputPercentage, setInputPercentage] = useState('');


  function changeButtonClass(e) {
    const removeSelect = document.getElementsByClassName("home-button");
    for (let i = 0; i < removeSelect.length; i += 1) {
      removeSelect[i].classList.remove('btn-act-t');
      removeSelect[i].classList.add('btn-act');
    }
    const SelectEvento = e.target;
    SelectEvento.classList.remove('btn-act');
    SelectEvento.classList.add('btn-act-t');
  }

  const handlePercentageChange = (e) => {
    setPercentage(e.target.value);
    changeButtonClass(e)
  }

  const handleInputChange = (e) => {
    setInputPercentage(e.target.value);
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
          <button onClick={ (e) => handlePercentageChange(e) } className="home-button btn-act" value={ 5 }>5%</button>
          <button onClick={ (e) => handlePercentageChange(e) } className="home-button btn-act" value={ 10 }>10%</button>
          <button onClick={ (e) => handlePercentageChange(e) } className="home-button btn-act" value={ 20 }>20%</button>
          <button onClick={ (e) => handlePercentageChange(e) } className="home-button btn-act" value={ 30 } >30%</button>
          <button onClick={ (e) => handlePercentageChange(e) } className="home-button btn-act" value={ 40 }>40%</button>
          <input  onChange={ (e) => handlePercentageChange(e) } type="number" placeholder="  %" className="input"/>
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
