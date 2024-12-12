"use client"
import { useEffect } from "react";

export const Slider = () => {

    useEffect(()=>{
        document.addEventListener('scroll', function () {
            const welcomeDiv = document.getElementById('welcome');
            const header = document.getElementById('header');

            if (window.scrollY > 50) { // Trigger after scrolling down 50px
                welcomeDiv.classList.add('scrolled');
                header.classList.add('show');
            } else {
                welcomeDiv.classList.remove('scrolled');
                header.classList.remove('show');
            }
        });
            const parallaxContainer = document.querySelector('.parallax');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    console.log("entry.isIntersecting", entry)
                    // if (entry.isIntersecting) {
                    //     parallaxContainer.classList.add('fade-in');
                    //      parallaxContainer.style.filter = 'blur(0px)'
                    //     // observer.unobserve(parallaxContainer); // Stop observing once faded in
                    // }
                    // else{
                    //     parallaxContainer.style.filter='blur(3px)';
                    //     parallaxContainer.classList.remove('fade-in');
                    // }
                    if (entry.intersectionRatio >= 0.3) {
                        console.log(1)
                        // When 50% of the box is visible
                        parallaxContainer.classList.add('fade-in');
                        parallaxContainer.style.filter = 'blur(0px)'
                    } else if (entry.intersectionRatio <0.75) {
                        // When 33% of the box is visible
                         console.log(2)
                        parallaxContainer.classList.remove('fade-in');
                        parallaxContainer.style.filter = 'blur(3px)'
                    } else {
                        // Revert color when less than 33% is visible
                         console.log(3)
                        
                    }
                });
            }, { threshold: [0.3,0.75] }); // Trigger when 50% of the div is visible

            
            observer.observe(parallaxContainer);
        
    },[])


    return <>
     <div className="non-parallex">
           <div className="welcome" id="welcome">
            <h1>Welcome to the Page!</h1>
        </div>
        <div className="container">
            <div className="box">Div 1</div>
            <div className="box">Div 2</div>
            <div className="box">Div 3</div>
        </div>
        <div className="container2">
            <div className="box2">Div 1</div>
            <div className="box2">Div 2</div>
        </div>
        <div className="parallax">
            <div className="content">
            {/* <!-- Additional content to ensure scrolling --> */}
            <h1>Scroll down to see the <br />header animation and welcome div  <br/>adjustment.</h1>
        </div>
        <div className="container2 new">
            <div className="box2">Div 1</div>
            <div className="box2">Div 2</div>
        </div>
        </div>
       
        <div className="parallax2">
            {/* <!-- Additional content to ensure scrolling --> */}
            <h1>Scroll down to see the header animation and welcome div adjustment.</h1>
        </div>
        <div className="container">
            <div className="box">Div 1</div>
            <div className="box">Div 2</div>
            <div className="box">Div 3</div>
        </div>
    </div>
    </>
}