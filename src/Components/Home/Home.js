import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';


const Home=()=>{
    return (
        <div className="wrapperDiv">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("<div class='hello'>Hello,</div>")
                        .typeString("<div class='about'> I am a Enthusiastic Developer with an experience of 3 years in Full-Stack Development and Software Engineering.</div>")
                        .callFunction(()=>{
                            console.log(document.getElementsByClassName("Typewriter__cursor")[0]);
                        })
                        .start()
                }}
            />
        </div>
    );
};

export default Home;