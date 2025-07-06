import React from "react";
import { allQuizzes } from "@/data/dummuyData";
import QuizClient from "../../component/QuizClient";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  const question = allQuizzes
    .flatMap((quiz) => quiz.questions)
    .find((q) => q.id.toLowerCase() === params.id.toLowerCase());

  const index = allQuizzes
    .flatMap((quiz) => quiz.questions)
    .findIndex((q) => q.id.toLowerCase() === params.id.toLowerCase());

  if (!question) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Question not found.
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-2 sm:w-[40rem] w-[20rem]">
          <QuizClient index={index} questionData={question} />
        </div>
      </div>
    </div>
  );
};

export default Page;
