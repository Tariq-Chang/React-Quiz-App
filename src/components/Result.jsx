import React, { useEffect } from 'react'

function Result({rightPercentage, showResult, setQuestionIndex, setShowResult}) {
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
  }, [showResult, rightPercentage])
  return (
    <div>
      <h1>Result</h1>
      <h2>{rightPercentage.toFixed(3)}%</h2>
      <button onClick={handleRestartButton}>Restart</button>
    </div>
  )
}

export default Result
