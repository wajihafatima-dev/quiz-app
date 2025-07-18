"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/QuestionCard";
import questions from "@/constant/question";

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleAnswer = (selected) => {
    const correct = questions[current].answer;
    setSelectedOption(selected);

    if (selected === correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        router.push("/result?score=" + score);
      }
    }, 1000); // Wait 1 second before moving to next
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
     <QuestionCard
      question={questions[current].question}
      options={questions[current].options}
      handleAnswer={handleAnswer}
      selectedOption={selectedOption}
      correctAnswer={questions[current].answer}
    />
    </div>
  );
};

export default QuizPage;
