import React from "react";
import { useState } from "react";
import Display from "./calculator1";
import ButtonContainer  from './calculator2';
import styles from "./calculator.module.css";

const Calculator = () => {
    let [calVal,setCalVal]=useState("");
    const onButtonClick=(buttonText)=>{
        if(buttonText==="AC"){
            setCalVal("");
        }
        else if(buttonText==="DEL"){
            const  newValue=calVal.slice(0,-1);
            setCalVal(newValue);
        }

        else if(buttonText==="="){
            const result=eval(calVal);
            setCalVal(result);
        }
        else{
            const newDisplayValue=calVal+buttonText;
            setCalVal(newDisplayValue);
        }
    }
    return ( 
        <div className={styles.calculator}>
            <Display displayValue={calVal}></Display>
            <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>

        </div>
     );
}
 
export default Calculator;