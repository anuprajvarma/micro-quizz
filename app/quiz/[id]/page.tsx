import React from "react";

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
  params: { id: string };
}

const Page = ({ params }: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-2 w-[40rem]">
          {allQuizzes.map(
            (quizz) =>
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
                        {/* <p>{chooseOption.includes(option) + "a"}</p> */}
                      </button>
                    ))}
                  </div>
                ) : (
                  <></>
                )
              )
            // <>
            //   {quiz.questions.map((question, index) => (
            //     <div
            //       key={index}
            //       className="text-gray-400 flex flex-col gap-4 font-semibold text-xl"
            //     >
            //       <div className="flex gap-2">
            //         <p>{index + 1}.</p>
            //         <p>{question.question}</p>
            //       </div>
            //       {question.options.map((option, idx) => (
            //         <button
            //           // onClick={() =>
            //           //   checkAnswer(
            //           //     option,
            //           //     quizz.answer,
            //           //     quizz.question
            //           //   )
            //           // }
            //           key={idx}
            //           className={`hover:text-slaty flex gap-4 text-slaty/80 text-start rounded-lg border border-lightSlaty hover:bg-lightSlaty px-8 py-2 transition duration-300`}
            //         >
            //           <input
            //             type="radio"
            //             name={option}
            //             id={option}
            //             value={option.split(" ").slice(1).join(" ")}
            //             //   checked={chooseOption.includes(option)}
            //           />
            //           <p className="text-white">{option}</p>
            //           {/* <p>{chooseOption.includes(option) + "a"}</p> */}
            //         </button>
            //       ))}
            //     </div>
            //   ))}
            // </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
