import React, { useState } from "react";
import "./styles.scss";

export function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "How far is Mars from the Sun?",
      type: "radio",
      options: [
        "2 millions miles",
        "82 million miles",
        "93 millions miles",
        "142 millions miles",
      ],
      answer: "142 millions miles",
    },
    {
      question: "How many moons does Mars have?",
      type: "radio",
      options: ["1 moon", "2 moons", "3 moons", "4 moons"],
      answer: "2 moons",
    },
    {
      question: "What is the radius of Mars?",
      type: "radio",
      options: [
        "2106 miles (3390 km)",
        "1300 miles (2100 km)",
        "770 miles (1240 km)",
        "200 miles (320 km)",
      ],
      answer: "2106 miles (3390 km)",
    },
  ];

  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setSelectedAnswer(event.target.value);
  };

  const submitAnswer = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer("");
    setShowResult(false);
  };

  const nextQuestion = () => {
    resetQuiz();
    setRandomQuestionIndex(Math.floor(Math.random() * questions.length));
  };

  return (
    <div className="card-container">
      <div className="fact-container">
        <h3 className="quiz-question">
          {questions[randomQuestionIndex].question}
        </h3>
        {questions[randomQuestionIndex].type === "radio" && (
          <ul>
            {questions[randomQuestionIndex].options.map((option) => (
              <li key={option} className="quiz-answer">
                <input
                  type="radio"
                  name={`question${randomQuestionIndex}`}
                  value={option}
                  onChange={handleAnswerChange}
                  disabled={showResult}
                />
                {option}
              </li>
            ))}
          </ul>
        )}
        {showResult ? (
          <div>
            {questions[randomQuestionIndex].answer === selectedAnswer ? (
              <p className="quiz-result">
                Correct answer!
                <br />
                <button onClick={nextQuestion}>Next question!</button>
              </p>
            ) : (
              <p className="quiz-result">
                Wrong answer!
                <br />
                <button onClick={resetQuiz}>Try again!</button>
              </p>
            )}
          </div>
        ) : (
          <p className="quiz-result">
            <br />
            <button onClick={submitAnswer}>Submit Answer</button>
          </p>
        )}
      </div>
    </div>
  );
}

export default Quiz;
