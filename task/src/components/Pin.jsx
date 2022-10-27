import React from 'react';
import BackSpace from '../img/backspace.png';
import Checked from '../img/checked.png';
import BackArrow from '../img/back-arrow.png'

function Pin() {
  return (
    <div className="pin">

    <div className="pin__header">

      <h1><img src={BackArrow} alt="back-arrow" /> home</h1>

      <h1 className="header__logo">
        Tech<span>Cells</span>
      </h1>

    </div>

    <div className="pin__main-section">

      <h3 className="main-section__greet">Enter your pin</h3>

      <input type="password" name="password" id="password" className='main-section__input' maxLength={4} />

      <div className="main-section__buttons">

      <div className="buttons__line1">
        <div className="line1__btn">1</div>
        <div className="line1__btn">4</div>
        <div className="line1__btn">7</div>
        <div className="line1__btn"><img src={BackSpace} alt="for delet" /></div>
      </div>
      
      <div className="buttons__line2">
        <div className="line2__btn">2</div>
        <div className="line2__btn">5</div>
        <div className="line2__btn">8</div>
        <div className="line2__btn">0</div>
      </div>

      <div className="buttons__line3">
        <div className="line3__btn">3</div>
        <div className="line3__btn">6</div>
        <div className="line3__btn">9</div>
        <div className="line3__btn"><img src={Checked} alt="check" /></div>
      </div>

      </div>

    </div>

  </div>
  )
}

export default Pin;

