import React from "react";

function QuizResult(props) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="show-score">
          <span className="text-green-700">Your Score:{props.score}</span>
          <br />
         <span className="text-red-400"> Total Score:{props.totalScore}</span>
        </div>
        <button
          type="button"
          onClick={props.tryAgain}
          className="absolute bottom-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Try Again
        </button>
      </div>
    </>
  );
}

export default QuizResult;
