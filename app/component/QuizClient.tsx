"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setScore } from "@/redux/slices/Score";
import { toast } from "react-toastify";

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
  const dispatch = useDispatch<AppDispatch>();

  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkAnswer = (option: string) => {
    setSelected(option);
    const isCorrect = option === questionData.answer;
    setIsCorrect(isCorrect);
  };

  return (
    <div className="text-gray-400 flex flex-col gap-4 font-semibold text-xl">
      <div className="flex gap-2">
        <p>{(index ?? 0) + 1}.</p>
        <p>{questionData.question}</p>
      </div>
      {questionData.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => checkAnswer(option)}
          className={`flex gap-4 text-slaty/80 cursor-pointer text-start rounded-lg hover:bg-lightSlaty px-8 py-2 transition duration-300 ${
            selected === option ? "border-blue-500 border-2" : "border"
          }`}
        >
          <input
            type="radio"
            name="option"
            value={option}
            checked={selected === option}
            readOnly
          />
          <p className="text-white">{option}</p>
        </button>
      ))}
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            if (selected) {
              if (isCorrect) {
                toast.success("Correct answer!", {
                  hideProgressBar: true,
                });
              } else {
                toast.error("Wrong answer!", {
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
