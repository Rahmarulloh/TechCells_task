import React from 'react';


function Home() {
  return (
    <div className="home">

        <div className="home__header">

          <h1>EasyChecker</h1>

          <h1 className="header__logo">
            Tech<span>Cells</span>
          </h1>

        </div>

        <div className="home__main-section">

          <h3 className="main-section__greet">Welcome to TechCells!</h3>

          <h2 className="main-section__title">Do you want to clock-in/out ?</h2>

          <button className="main-section__btn">
            Clock-in/out
          </button>

        </div>

      </div>
  )
}

export default Home;
