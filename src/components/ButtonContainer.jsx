import styles from "./ButtonContainer.module.css";
import React from 'react'

const ButtonContainer = ({onButtonClick}) => {

  const buttonsNmaes=[
    'C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonsNmaes.map(buttonsName=><button className={styles.button}
      onClick={()=>onButtonClick(buttonsName)}
      >{buttonsName}</button>)}
        {/* <button className={styles.button}>c</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>4</button> */}
    </div>
  )
}

export default ButtonContainer