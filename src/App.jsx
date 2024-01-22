import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";


function App() {

  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttenValue)=>{
    if(buttenValue==='C')
    {
      setCalVal("");
    }else if(buttenValue==='=')
    {
      const result=eval(calVal);
      setCalVal(result);
    }
    else
    {
      const newDisplayValue=calVal+buttenValue;
      setCalVal(newDisplayValue);
    }
  };
 
  return (
    <div className={styles.calculator}>
      <Display diaplayValue={calVal}/>
      <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
