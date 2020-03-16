import React from "react";
import Jumbotron from "../components/Jumbotron"
import ClickyGameImage from "../assets/images/technics-q-c-640-480-1.jpg"
import RPGGameImage from "../assets/images/technics-q-c-640-480-2.jpg"


function Portfolio () {
    return (
        <div id="main-container" className="container">
        <section className="main-section">
          <div className="row">
            <div className="col-md-12">
                <Jumbotron>
                <h1>Portfolio</h1>
                </Jumbotron>
          
            </div>
          </div>
    
            

          <div className="work">
            <a href="https://tangchristina.github.io/Psychic-Game/"><img src= {ClickyGameImage} alt="Psychic Game"></img></a>
            <h3>Psychic Game</h3>
          </div>
         
          <div className="work">
            <a href="https://tangchristina.github.io/unit-4-game/"><img src={RPGGameImage} alt="RPG Game"></img></a>
            
            <h3>Crystal Game</h3>
          </div>
      
          <div className="work">
            <a href="https://tangchristina.github.io/TriviaGame/"><img src="assets/images/technics-q-c-640-480-5.jpg" alt="Trivia Game"></img></a>
    
            <h3>Trivia Game</h3>
          </div>
          <div className="work">
            <a href="https://eawhite00.github.io/UWBootCampProject1/"><img src="assets/images/technics-q-c-640-480-7.jpg" alt="Rutgers Info Widget"></img></a>
    
            <h3>uTrippin'</h3>
          </div>

          <div className="work">
            <a href="https://tangchristina.github.io/train-scheduler/"><img src="assets/images/technics-q-c-640-480-9.jpg" alt="Rock Paper Scissors"></img></a>
    
            <h3>Train Scheduler</h3>
        </div>
    
        <div className="work">
          <a href="https://calm-mountain-13489.herokuapp.com/"><img src="assets/images/friend-finder.jpg" alt="Friend Finder"></img></a>
    
          <h3>Friend Finder</h3>
      </div>
      <div className="work">
        <a href="https://serene-everglades-87109.herokuapp.com/"><img src="assets/images/images.jpeg" alt="Burger"></img></a>
    
        <h3>Eat-Da-Burger</h3>
    </div>
    <div className="work">
      <a href="https://shrouded-fortress-55458.herokuapp.com/"><img src="assets/images/hotel.jpeg" alt="Hotel"></img></a>
    
      <h3>Hot Hotel</h3>
    </div>
    <div className="work">
      <a href="https://tangchristina.github.io/clicky-game/"><img src="assets/images/bmw.jpeg" alt="clicky-game"></img></a>
    
      <h3>Car Clicky Game</h3>
    </div>
    <div className="work">
      <a href="http://lit-cliffs-37719.herokuapp.com/"><img src="assets/images/bmw.jpeg" alt="google-books"></img></a>
    
      <h3>Google Books</h3>
    </div>
    
    
        </section>







    
      </div>
    
    )
}

export default Portfolio;