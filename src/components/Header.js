import React from "react"
import JayPhoto from "../images/Jay.png"

export default function Header() {
    return (
        <header>
            <img src={JayPhoto}
            alt= "Business Photo"
            className= "header-image"
            />
            <h1> Jacob Morrell</h1>
            <h2>Frontend Developer</h2>
            <h3>Future Website Link</h3>
                <div>
                    <button><a href="mailto:jacob.tabares90@gmail.com"><i class='fa fa-envelope-o'> Email</i></a></button>
                    <button> 
                      
                        <a href="https://www.linkedin.com/in/jacobtabares/">
                        <i class='fa fa-linkedin-square'>
                            </i> LinkedIn</a>
                    </button>
                   
              
                </div>
             
        </header>
    )
}
