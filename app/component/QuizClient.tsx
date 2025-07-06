"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "@/redux/slices/Score";
import { toast } from "react-toastify";
import { setQuestions } from "@/redux/slices/Questions";

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

interface QuizClientProps {
  index?: number;
  questionData: Question;
}

const QuizClient: React.FC<QuizClientProps> = ({ questionData, index }) => {
  const router = useRouter();
  const questions = useSelector((state: RootState) => state.Questions);
  const dispatch = useDispatch<AppDispatch>();

  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  console.log(
    "Questions:",
    questions,
    questionData,
    questions.includes(questionData)
  );

  const checkAnswer = (option: string) => {
    dispatch(setQuestions([...questions, questionData]));
    setSelected(option);
    const isCorrect = option === questionData.answer;
    setIsCorrect(isCorrect);
  };

  return (
    <div className="text-gray-400 flex flex-col gap-4 font-semibold text-xl w-full">
      <div className="flex gap-2">
        <p>{(index ?? 0) + 1}.</p>
        <p>{questionData.question}</p>
      </div>
      <div className="flex flex-col gap-4">
        {questionData.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => checkAnswer(option)}
            className={`flex gap-4 text-slaty/80 cursor-pointer rounded-lg w-full  hover:bg-lightSlaty px-8 py-2 transition duration-300 ${
              selected === option ? "border-blue-500 border-2" : "border"
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={
                selected === option ||
                questions.some(
                  (q) => q.id === questionData.id && q.answer === option
                )
              }
              readOnly
            />
            <p className="text-white">{option}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            if (selected) {
              if (isCorrect) {
                toast.success("Correct answer!", {
                  hideProgressBar: true,
                });
              } else {
                toast.error(`Correct answer is ${questionData.answer}`, {
                  hideProgressBar: true,
                });
              }

              dispatch(setScore(selected === questionData.answer ? 1 : 0));
              router.back();
            } else {
              router.back();
            }
          }}
          className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {selected ? "Done" : "Back"}
        </button>
      </div>
    </div>
  );
};

export default QuizClient;
