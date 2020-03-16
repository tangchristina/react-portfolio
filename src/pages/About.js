import React from "react";
import Jumbotron from "../components/Jumbotron"
import CatImage from "../assets/images/cat.jpg"

function About () {
    return (
        <Jumbotron>
        <section className="main-section">
          <h1>About Me</h1>
    
          <img src={CatImage} className="auth-image" alt="Your Name"></img>
    
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum luctus felis, ac rhoncus nunc porttitor condimentum. Mauris sit amet dolor eu elit varius varius facilisis id arcu. Proin vel dui massa. Nunc rhoncus fringilla pharetra. Vestibulum bibendum consectetur euismod. Proin commodo purus vitae sollicitudin consectetur.</p>
    
          <p>Donec vehicula lacus at leo feugiat lacinia. In et ex ultrices, ultrices neque non, pretium odio. Nunc id eros iaculis, pulvinar quam eget, egestas mauris.</p>
    
          <p>Suspendisse dictum, arcu at convallis faucibus, quam sapien tincidunt nunc, sit amet egestas nibh tortor et mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        
        </section>
    
    </Jumbotron>
    
    )
}

export default About;