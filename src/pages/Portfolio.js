import React from "react";
import Jumbotron from "../components/Jumbotron"
import PsychicGameImage from "../assets/images/technics-q-c-640-480-1.jpg"
import RPGGameImage from "../assets/images/technics-q-c-640-480-2.jpg"
import TriviaGameImage from "../assets/images/technics-q-c-640-480-5.jpg"
import uTrippinImage from "../assets/images/technics-q-c-640-480-7.jpg"
import trainSchedulerImage from "../assets/images/technics-q-c-640-480-9.jpg"
import FriendFinderImage from "../assets/images/friend-finder.jpg"
import BurgerImage from "../assets/images/images.jpeg"
import HotelImage from "../assets/images/hotel.jpeg"
import ClickyGameImage from "../assets/images/bmw.jpeg"
import GoogleBooksImage from "../assets/images/google-books.jpg"
import GreenGrubImage from "../assets/images/green-grub-image.jpg"

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
            <a href="https://tangchristina.github.io/Psychic-Game/"><img src= {PsychicGameImage} alt="Psychic Game"></img></a>
            <h3>Psychic Game</h3>
          </div>
         
          <div className="work">
            <a href="https://tangchristina.github.io/unit-4-game/"><img src={RPGGameImage} alt="RPG Game"></img></a>
            
            <h3>Crystal Game</h3>
          </div>
      
          <div className="work">
            <a href="https://tangchristina.github.io/TriviaGame/"><img src={TriviaGameImage} alt="Trivia Game"></img></a>
    
            <h3>Trivia Game</h3>
          </div>
          <div className="work">
            <a href="https://eawhite00.github.io/UWBootCampProject1/"><img src={uTrippinImage} alt="U Trippin"></img></a>
    
            <h3>uTrippin'</h3>
          </div>

          <div className="work">
            <a href="https://tangchristina.github.io/train-scheduler/"><img src={trainSchedulerImage} alt="Train Scheduler"></img></a>
    
            <h3>Train Scheduler</h3>
        </div>
    
        <div className="work">
          <a href="https://calm-mountain-13489.herokuapp.com/"><img src={FriendFinderImage} alt="Friend Finder"></img></a>
    
          <h3>Friend Finder</h3>
      </div>
      <div className="work">
        <a href="https://serene-everglades-87109.herokuapp.com/"><img src={BurgerImage} alt="Burger"></img></a>
    
        <h3>Eat-Da-Burger</h3>
    </div>
    <div className="work">
      <a href="https://shrouded-fortress-55458.herokuapp.com/"><img src={HotelImage} alt="Hotel"></img></a>
    
      <h3>Hot Hotel</h3>
    </div>
    <div className="work">
      <a href="https://tangchristina.github.io/clicky-game/"><img src={ClickyGameImage} alt="clicky-game"></img></a>
    
      <h3>Car Clicky Game</h3>
    </div>
    <div className="work">
      <a href="http://lit-cliffs-37719.herokuapp.com/"><img src={GoogleBooksImage} alt="google-books"></img></a>
    
      <h3>Google Books</h3>
    </div>
    <div className="work">
      <a href="https://enigmatic-oasis-28658.herokuapp.com/"><img src={GreenGrubImage} alt="green-grub"></img></a>
    
      <h3>Green Grub</h3>
    </div>
    
    
        </section>







    
      </div>
    
    )
}

export default Portfolio;