import React from "react";
import Icofont from "react-icofont";

/**
 * @componentName Mission
 * @description Display Company Mission details
 */

/// Custom Stylesheet
import "./we.css";


const We = () => {

  const backImage = require("../assets/images/whatwedoimg.jpg")

  return (
    <section id="whatwedo" className="single-slider-item_whatwedo whatwedo ptb-100" style={{ backgroundImage: `url(${backImage})` }}>
      <div className="container" >
        <div className="row" >
          <div className="col-lg-8 offset-lg-2 text-center" >

            <div className="section-title" >
              <h2 style={{ color: "#fff" }}>What We Do</h2>

              <span className="section-title-bg" >What We Do</span>
            </div>

          </div>
        </div>

      </div>
    

        <div className="col-lg-9 colclass"  >
         


           
             

       
        
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12" style={{marginLeft:"8%", fontSize:"16px"}}>
  
          <p>
          We are essentially a skilling provider that trains diverse talent and certifies them as ready to deploy and employable by corporates and institutions. 
          </p>
          <span style={{lineHeight:"1.9"}}>We aim to be a global and trusted B2B enterprise recruiting and upskilling partner that sources, screens, skills and certifies diverse talent for advanced, new age high growth technologies, especially those related to </span>
          
          <strong style={{color: 'black', color: 'black', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', fontSize:"16px"}}>Cloud , Cyber security , Data science , Web3, Blockchains and the Metaverse.</strong>
          <br /><br /><span style={{lineHeight:"1.9"}}>
          We have significant expertise and resources around training for key programming languages as well. 
 </span>
 <br /><br />
          <p>Apart from our B2B business we also run open courses globally for anyone who wishes to get immersed and understand in greater detail these new Age , High growth Technologies. </p>
        </div>
   
            

       




        </div>
    


    </section>
  );
};

export default We;
