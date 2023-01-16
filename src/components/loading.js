import React, { Fragment } from 'react'

/**
 * @componentName Loader
 * @description Custom loader for loading screen to display till data is ready to be displayed
 */

/// Import images
import Logo from "../assets/images/bklogo.png";

const Loading = () => {
  return (
    <Fragment>
      <div className="site-preloader-wrap">

      


          <img
            src={Logo}
            alt="Logo"
          />
         <p style={{ fontSize: "20px", color: "black", textAlign:"center" }}>Loading....</p> 

    
      </div>
    </Fragment>
  )
}

export default Loading