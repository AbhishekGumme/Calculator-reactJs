import styles from "./Display.module.css";
import React from 'react'

const Display = ({diaplayValue}) => {
  return (
    <input type="text" className={styles.display} value={diaplayValue} readOnly/>
  )
}

export default Display