import React from "react";
import "./style.css"

function Contact () {
    return (
        <div className="container">
        <div className="row" style = {{textAlign: "center"}}>
          <div className="col-12">
            <a href= 'https://github.com/tangchristina'target="_blank"><button className="fab fa-github-square fa-10x"></button></a>
           <a href='https://linkedin.com/in/christina-tang'target="_blank"> <button className="fab fa-linkedin fa-10x"></button></a>
           <a href ='https://drive.google.com/file/d/1PcZVNHWqBu3CQQUFrFsLbqWh44WiMV9N/view?usp=sharing'target="_blank"><button className="fas fa-file-alt fa-10x"></button></a>
          </div>
        </div>
        </div>
            
    )
}

export default Contact;