import styles from "./calculator2.module.css";
import React from "react";
    const ButtonContainer=({onButtonClick})=>{
        const buttonNames=["AC","DEL","+","1","2","3","*","4","5","6","-","7","8","9","/","0",".","="];

    return (
        <div>
          
            <div className={styles.buttonContainer}>
                {buttonNames.map(buttonName =>  <button className={styles.button} onClick={()=>{onButtonClick(buttonName)}}>{buttonName}</button>
                  )}
            </div>
        </div>
);
    }

export default ButtonContainer;