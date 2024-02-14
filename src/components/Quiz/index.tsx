// https://javascript.plainenglish.io/creating-a-dynamic-quiz-app-in-react-js-b08b9a5e3796
// In the terminal: npx create-react-app quiz-app

import React, { useState } from "react";
// import './Quiz.css';

// Component Quiz (Part of App)
export function Quiz(props: any) {
  // Why is the props value "any"?

  const [currentQuestion, setCurrentQuestion] = useState(0);
  //"currentQuestion" is the initial state (0), and it is eventually replaced in the "setCurrentQuestion" when the page/value changes
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Questions and answers
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

  // Correct answer = Property "answer" from the object "questions"
  // const correctAnswer = questions[currentQuestion].answer;

  // Checking if the selected answer is the correct answer
  // const isCorrect = selectedAnswer === correctAnswer;

  // Function to replace the initial value "selectedAnswer" to "setSelecetdAnswer"
  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setSelectedAnswer(event.target.value);
  };

  // Function to submit the answer and display the result (correct/wrong answer)
  const submitAnswer = () => {
    setShowResult(true);
  };

  // Function to reset the quiz
  const resetQuiz = () => {
    setSelectedAnswer("");
    setShowResult(false);
  };

  // Function to display the next question
  const nextQuestion = () => {
    resetQuiz();
    setRandomQuestionIndex(Math.floor(Math.random() * questions.length));
  };

  return (
    <div>
      <h3>{questions[randomQuestionIndex].question}</h3>{" "}
      {/*It displays the property "question" from the object "questions"*/}
      {questions[randomQuestionIndex].type === "radio" && (
        <ul>
          {questions[randomQuestionIndex].options.map(
            (
              option, //
            ) => (
              <li key={option}>
                <input // The user's answer
                  type="radio"
                  name={`question${randomQuestionIndex}`}
                  value={option}
                  onChange={handleAnswerChange}
                  disabled={showResult}
                />
                {option}
              </li>
            ),
          )}
        </ul>
      )}
      {showResult ? (
        <div>
          {questions[randomQuestionIndex].answer === selectedAnswer ? ( // Ternary Operator: Is true ? Then do this : else do this
            <p>
              Correct answer!
              <br />
              <button onClick={nextQuestion}>Next question!</button>
            </p>
          ) : (
            <p>
              Wrong answer!
              <br />
              <button onClick={resetQuiz}>Try again!</button>
            </p>
          )}
        </div>
      ) : (
        <button onClick={submitAnswer}>Submit Answer</button>
      )}
    </div>
  );
}

export default Quiz;
