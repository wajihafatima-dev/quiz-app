"use client";
import React from "react";

const QuestionCard = ({
  question,
  options,
  handleAnswer,
  selectedOption,
  correctAnswer,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-90 max-w-xl font-serif">
      <h2 className="text-xl font-semibold mb-4 text-purple-900">{question}</h2>
      <div className="grid gap-3">
        {options.map((option, idx) => {
          let bgColor = "bg-purple-400 hover:bg-purple-500";

          if (selectedOption) {
            if (option === correctAnswer && option === selectedOption) {
              bgColor = "bg-green-500"; // Correct
            } else if (option === selectedOption && option !== correctAnswer) {
              bgColor = "bg-red-500"; // Wrong
            } else if (option === correctAnswer) {
              bgColor = "bg-green-500"; // Show correct one after wrong click
            } else {
              bgColor = "bg-gray-300"; // Disabled state
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={`${bgColor} text-white py-2 px-4 rounded-xl transition`}
              disabled={!!selectedOption} // Disable all buttons after selection
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
