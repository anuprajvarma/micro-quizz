import Link from "next/link";
import React from "react";
import { allQuizzes } from "@/app/api/dummuyData";

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
              params.category.toLowerCase() === quizz.category.toLowerCase()
                ? quizz.questions.map((question, index) => (
                    <Link
                      key={question.id}
                      href={`/quiz/${question.id}`}
                      className="text-gray-900 flex gap-1 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                      <p>{index + 1}.</p>
                      <p>{question.question}</p>
                    </Link>
                  ))
                : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
