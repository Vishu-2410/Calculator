import styles from "./calculator1.module.css";
import React from "react";
const Display = ({ displayValue }) => {

    return (
        <div>
            <input className={styles.display} type="text" value={displayValue} readOnly></input>
        </div>
    );
}

export default Display;