import React from "react";
import QuizzTopic from "@/app/component/QuizzTopic";

const allQuizzes = [
  {
    category: "Math",
    quizzes: [
      { id: "1", title: "Basic Algebra" },
      { id: "2", title: "Geometry Fun" },
    ],
  },
  {
    category: "Science",
    quizzes: [
      { id: "3", title: "Physics Basics" },
      { id: "4", title: "Chemistry 101" },
    ],
  },
  {
    category: "History",
    quizzes: [
      { id: "5", title: "World War II" },
      { id: "6", title: "Ancient Civilizations" },
    ],
  },
  {
    category: "Programming",
    quizzes: [
      { id: "7", title: "JavaScript Essentials" },
      { id: "8", title: "React Fundamentals" },
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
        <div className="flex flex-col gap-[4rem]">
          <p className="text-white text-5xl font-semibold text-center">
            Topics in{" "}
            {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {allQuizzes.map((quiz) => {
              if (
                quiz.category.toLowerCase() === params.category.toLowerCase()
              ) {
                return quiz.quizzes.map((q) => (
                  <QuizzTopic key={q.id} id={q.id} title={q.title} />
                ));
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
