import React, { useState } from "react";
import { QuizData } from "../data/QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
    console.warn(currentQuestion + 2);
  };


  const updateScore = () => {
    if (
      QuizData[currentQuestion].answer ===
      QuizData[currentQuestion].options[parseInt(clickedOption) - 1]
    ) {
      setScore(score + 1);
    }
    console.warn(
      QuizData[currentQuestion].options[parseInt(clickedOption) - 1]
    );
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <div>
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                console.log(option, i);
                return (
                  <button
                    // className="option-btn"
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-10">
         
              <button
                type="button"
                onClick={changeQuestion}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
