import React from "react";
import { allQuizzes } from "@/data/dummuyData";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-2 w-[40rem]">
          {allQuizzes.map((quizz) =>
            quizz.questions.map((question, index) =>
              params.id.toLowerCase() === question.id.toLowerCase() ? (
                <div
                  key={index}
                  className="text-gray-400 flex flex-col gap-4 font-semibold text-xl"
                >
                  <div key={question.id} className="flex gap-2">
                    <p>{index + 1}.</p>
                    <p>{question.question}</p>
                  </div>
                  {question.options.map((option, idx) => (
                    <button
                      // onClick={() =>
                      //   checkAnswer(
                      //     option,
                      //     quizz.answer,
                      //     quizz.question
                      //   )
                      // }
                      key={idx}
                      className={`hover:text-slaty flex gap-4 text-slaty/80 text-start rounded-lg border border-lightSlaty hover:bg-lightSlaty px-8 py-2 transition duration-300`}
                    >
                      <input
                        type="radio"
                        name={option}
                        id={option}
                        value={option.split(" ").slice(1).join(" ")}
                        //   checked={chooseOption.includes(option)}
                      />
                      <p className="text-white">{option}</p>
                    </button>
                  ))}
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
