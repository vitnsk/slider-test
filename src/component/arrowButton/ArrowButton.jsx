
//import React, { useEffect,useState, useContext } from "react";
//import {SlderContext} from '../../slider/Slider'
import styles from "./ArrowButton.module.css";


function ArrowButton({chosenSlide}) {
 

    return (
      <>
    

            <div className={styles.arrowsButtonsBlock}>
              <button
               onClick={()=>chosenSlide(-1)}
                className={`${styles.arrowButtonLeft} ${styles.arrowsButtons}`}
              >                
              </button>
              <button
              onClick={() => chosenSlide(1)}
                className={`${styles.arrowButtonRight} ${styles.arrowsButtons}`}
              >                
              </button>             
            </div>         
            
      </>
    )
  }

  export default ArrowButton;