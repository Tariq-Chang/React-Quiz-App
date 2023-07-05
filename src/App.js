import { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import data from "./data";
function App() {
  const [questionIndex, setQuestionIndex] = useState(() => {
    let savedQuestionIndex = localStorage.getItem('questionIndex');
    return JSON.parse(savedQuestionIndex) || 0;
  });
  const [showResult, setShowResult] = useState(() => {
    let savedShowResult = localStorage.getItem('showResult');
    return JSON.parse(savedShowResult);
  });
  const [rightPercentage, setRightPercentage] = useState(() => {
    let savedPercentage = localStorage.getItem('rightPercentage');
    return JSON.parse(savedPercentage);
  });

  useEffect(() => {
    let savedShowResult = localStorage.getItem('showResult');
    setShowResult(JSON.parse(savedShowResult));
  }, [showResult])

  console.log(showResult);
  return (
    <div className="App">
      {showResult ? (
        <Result rightPercentage={rightPercentage} showResult={showResult} setShowResult={setShowResult} setQuestionIndex={setQuestionIndex}/>
      ) : (
        <div>
          <h1 style={{textAlign:"center", fontSize:"36px"}}>Quiz App</h1>
          <Question q={data[questionIndex]} setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} setShowResult={setShowResult} showResult={showResult} setRightPercentage={setRightPercentage} rightPercentage={rightPercentage}/>
        </div>
      )}
    </div>
  );
}

export default App;
