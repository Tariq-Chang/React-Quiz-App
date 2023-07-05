import React, { useEffect, useState } from "react";
import data from "../data";
import "./Question.css";

const Question = ({
  q,
  setQuestionIndex,
  questionIndex,
  setShowResult,
  showResult,
  setRightPercentage,
  rightPercentage,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    let savedCurrentQuestion = localStorage.getItem("currentQuestion");
    return JSON.parse(savedCurrentQuestion) || q;
  });
  const [correct, setCorrect] = useState(() => {
    let savedCorrect = localStorage.getItem("correct");
    return JSON.parse(savedCorrect);
  });

  const { question, option1, option2, option3, option4, answer } = q;
  useEffect(() => {
    localStorage.setItem("questionIndex", JSON.stringify(questionIndex));
    localStorage.setItem("correct", JSON.stringify(correct));
    localStorage.setItem("showResult", JSON.stringify(showResult));
    localStorage.setItem("currentQuestion", JSON.stringify(q));
    localStorage.setItem("rightPercentage", JSON.stringify(rightPercentage));
  }, [q, questionIndex, correct, showResult, rightPercentage]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleNextButton = (e) => {
    console.log(selectedOption);
    if (selectedOption === answer) {
      setCorrect(correct + 1);
      console.log("correct", correct);
      setSelectedOption("");
    }
    if (questionIndex + 1 < data.length) setQuestionIndex(questionIndex + 1);
    else {
      setShowResult(true);
      let percentage = (correct * 100) / data.length;
      setRightPercentage(percentage);
    }
  };

  const handleSkipButton = () => {
    if (questionIndex + 1 < data.length) setQuestionIndex(questionIndex + 1);
    else {
      setShowResult(true);
      let percentage = (correct * 100) / data.length;
      setRightPercentage(percentage);
    }
  };
  return (
    <>
      <div className="question__main">
        {console.log(showResult)}

        <div className="question__container">
          <div className="question">
            <b className="question__number">Q<sub >{questionIndex + 1}</sub> </b>
            <p>{question}</p>
          </div>
          <div className="options">
            <div className="row1">
              <div className="opt opt1">
              <input
                type="radio"
                name="option"
                onChange={handleChange}
                value={option1}
                id="option1"
                checked={selectedOption === option1}
              />
              <label htmlFor="option1">{option1}</label>
              </div>

              <div className="opt opt2">
              <input
                type="radio"
                name="option"
                onChange={handleChange}
                value={option2}
                id="option2"
                checked={selectedOption === option2}
              />
              <label htmlFor="option2">{option2}</label>
              </div>
            </div>
            <div className="row2">
            <div className="opt opt3">
            <input
              type="radio"
              name="option"
              onChange={handleChange}
              value={option3}
              id="option3"
              checked={selectedOption === option3}
            />
            <label htmlFor="option3">{option3}</label>
            </div>

            <div className="opt opt4">
                <input
              type="radio"
              name="option"
              onChange={handleChange}
              value={option4}
              id="option4"
              checked={selectedOption === option4}
            />
            <label htmlFor="option4">{option4}</label>
            </div>
            </div>
          </div>
          <button onClick={handleSkipButton} className="btn skip__btn">Skip</button>
          <button onClick={handleNextButton} className="btn next__btn">Next</button>
        </div>
      </div>
    </>
  );
};

export default Question;
