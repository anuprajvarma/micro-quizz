import React from "react";
import { allQuizzes } from "@/data/dummuyData";
import QuizClient from "../../component/QuizClient";

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async (props: Props) => {
  const params = await props.params;

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-2 w-[40rem]">
          {allQuizzes.map((quizz) =>
            quizz.questions.map((question, index) =>
              params.id.toLowerCase() === question.id.toLowerCase() ? (
                <QuizClient key={index} index={index} questionData={question} />
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
