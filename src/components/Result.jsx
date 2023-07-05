import React, { useEffect, useState } from 'react'
import data from '../data';
import "./Result.css";

function Result({rightPercentage, showResult, setQuestionIndex, setShowResult}) {
  const [remarks,setRemarks] = useState("");
  const [correct,setCorrect] = useState(() => {
    let savedCorrect = localStorage.getItem('correct');
    return JSON.parse(savedCorrect) || 0;
  })
  const handleRestartButton = () => {
    localStorage.setItem('questionIndex', 0);
    setQuestionIndex(0);
    localStorage.setItem('correct', 0);
    localStorage.setItem('showResult', false);
    setShowResult(false);
  }
  
  useEffect(() => {
    localStorage.setItem('showResult', showResult);
    localStorage.setItem('rightPercentage', rightPercentage);
    if(rightPercentage >= 80){
      setRemarks("Excellent")
    }else if(rightPercentage >= 60){
      setRemarks("Good")
    }else if(rightPercentage >= 40){
      setRemarks("Average");
    }else{
      setRemarks("Poor");
    }
  }, [showResult, rightPercentage])
  return (
    <div className="result__container">
      <h1>Result</h1>
      <table border="1" cellPadding="10">
        <tr>
          <td>Correct</td>
          <td>{correct}</td>
        </tr>
        <tr>
          <td>Total Questions</td>
          <td>{data.length}</td>
        </tr>
        <tr>
          <td>Result</td>
          <td>{rightPercentage.toFixed(3)}%</td>
        </tr>
        <tr>
          <td>Remarks</td>
          <td style={rightPercentage > 50 ? {color:"green", padding:"10px"}:{color:"red", padding:"10px"}}>{remarks}</td>
        </tr>
      </table>
      <button onClick={handleRestartButton}>Restart</button>
    </div>
  )
}

export default Result
