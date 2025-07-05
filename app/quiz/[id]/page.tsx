import React from "react";

const allQuizzes = [
  {
    category: "Math",
    quizzes: [
      {
        id: "1",
        title: "Basic Algebra",
        questions: [
          {
            question: "What is 5 + 3?",
            options: ["6", "7", "8", "9"],
            answer: "8",
          },
          {
            question: "What is x in 2x = 10?",
            options: ["2", "5", "10", "20"],
            answer: "5",
          },
          {
            question: "Solve: 3x - 2 = 4",
            options: ["1", "2", "3", "4"],
            answer: "2",
          },
          {
            question: "What is the square of 9?",
            options: ["18", "72", "81", "90"],
            answer: "81",
          },
          {
            question: "Which of these is a prime number?",
            options: ["4", "6", "9", "7"],
            answer: "7",
          },
          {
            question: "What is the value of (2 + 3) × 2?",
            options: ["10", "12", "8", "5"],
            answer: "10",
          },
          {
            question: "Simplify: 4(3 + 2)",
            options: ["20", "16", "12", "10"],
            answer: "20",
          },
          {
            question: "What is the cube of 2?",
            options: ["4", "6", "8", "10"],
            answer: "8",
          },
          {
            question: "Which of these is divisible by 3?",
            options: ["10", "15", "22", "25"],
            answer: "15",
          },
          {
            question: "What is 100 divided by 4?",
            options: ["20", "25", "30", "40"],
            answer: "25",
          },
        ],
      },
      {
        id: "2",
        title: "Geometry Fun",
        questions: [
          {
            question: "How many sides does a triangle have?",
            options: ["3", "4", "5", "6"],
            answer: "3",
          },
          {
            question: "What is the sum of interior angles of a square?",
            options: ["180", "360", "270", "90"],
            answer: "360",
          },
          {
            question: "What is a polygon with 5 sides called?",
            options: ["Quadrilateral", "Pentagon", "Hexagon", "Octagon"],
            answer: "Pentagon",
          },
          {
            question: "Which shape has no corners?",
            options: ["Square", "Triangle", "Circle", "Rectangle"],
            answer: "Circle",
          },
          {
            question: "How many degrees are there in a right angle?",
            options: ["45", "90", "180", "360"],
            answer: "90",
          },
          {
            question:
              "What is the area of a rectangle with width 4 and length 6?",
            options: ["10", "20", "24", "30"],
            answer: "24",
          },
          {
            question: "What is the perimeter of a square with side 5?",
            options: ["10", "15", "20", "25"],
            answer: "20",
          },
          {
            question: "How many faces does a cube have?",
            options: ["4", "5", "6", "8"],
            answer: "6",
          },
          {
            question: "What is a triangle with all sides equal called?",
            options: ["Scalene", "Isosceles", "Equilateral", "Right Triangle"],
            answer: "Equilateral",
          },
          {
            question: "Which unit is used to measure angles?",
            options: ["Inches", "Degrees", "Meters", "Grams"],
            answer: "Degrees",
          },
        ],
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
        <div className="list-disc pl-6 flex flex-col gap-2 w-[40rem]">
          {allQuizzes.map((quizz) => (
            <div key={quizz.category} className="mb-6">
              {quizz.quizzes.map((quiz) => (
                <>
                  {params.id === quiz.id ? (
                    <div
                      key={quiz.id}
                      className="text-lg text-gray-200 flex flex-col gap-[3rem]"
                    >
                      <p className="text-white text-5xl font-semibold text-center">
                        {quiz.title}
                      </p>
                      <div className="list-inside list-disc pl-4 mt-2 flex flex-col gap-4">
                        {quiz.questions.map((question, index) => (
                          <div
                            key={index}
                            className="text-gray-400 flex flex-col gap-4 font-semibold text-xl"
                          >
                            <div className="flex gap-2">
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
                        ))}
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
