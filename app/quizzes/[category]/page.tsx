import Link from "next/link";
import React from "react";
// import QuizzTopic from "@/app/component/QuizzTopic";

const allQuizzes = [
  {
    category: "Math",
    questions: [
      {
        id: "q1",
        question: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: "8",
      },
      {
        id: "q2",
        question: "What is x in 2x = 10?",
        options: ["2", "5", "10", "20"],
        answer: "5",
      },
      {
        id: "q3",
        question: "Solve: 3x - 2 = 4",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        id: "q4",
        question: "What is the square of 9?",
        options: ["18", "72", "81", "90"],
        answer: "81",
      },
      {
        id: "q5",
        question: "Which of these is a prime number?",
        options: ["4", "6", "9", "7"],
        answer: "7",
      },
      {
        id: "q6",
        question: "What is the value of (2 + 3) × 2?",
        options: ["10", "12", "8", "5"],
        answer: "10",
      },
      {
        id: "q7",
        question: "Simplify: 4(3 + 2)",
        options: ["20", "16", "12", "10"],
        answer: "20",
      },
      {
        id: "q8",
        question: "What is the cube of 2?",
        options: ["4", "6", "8", "10"],
        answer: "8",
      },
      {
        id: "q9",
        question: "Which of these is divisible by 3?",
        options: ["10", "15", "22", "25"],
        answer: "15",
      },
      {
        id: "q10",
        question: "What is 100 divided by 4?",
        options: ["20", "25", "30", "40"],
        answer: "25",
      },
    ],
  },
];

interface Props {
  params: { category: string };
}

const Page = ({ params }: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[3rem]">
          <p className="text-white text-5xl font-semibold text-center">
            Questions
          </p>
          <div className="flex flex-col gap-2 w-[40rem]">
            {allQuizzes.map((quizz) =>
              // Check if the category matches the params
              params.category.toLowerCase() === quizz.category.toLowerCase() ? (
                quizz.questions.map((question, index) => (
                  <Link
                    key={question.id}
                    href={`/quiz/${question.id}`}
                    className="text-gray-900 flex gap-1 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <p>{index + 1}.</p>
                    <p>{question.question}</p>
                  </Link>
                ))
              ) : (
                <div key={quizz.category}>
                  <p className="text-gray-400 text-center">
                    No quizzes available for this category.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
