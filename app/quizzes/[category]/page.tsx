"use client";
import Link from "next/link";
import { allQuizzes } from "@/data/dummuyData";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useParams } from "next/navigation";
// interface Props {
//   params: Promise<{ category: string }>;
// }

const Page = () => {
  const params = useParams();
  const { category } = params;
  //   const { category } = await props.params;

  console.log("Category:", category);

  const score = useSelector((state: RootState) => state.Score);

  const selectedQuiz = allQuizzes.find(
    (quiz) => quiz.category.toLowerCase() === category
  );

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-[3rem]">
            <p className="text-white text-5xl font-semibold text-center">
              Questions
            </p>
            <div className="flex justify-between text-white text-lg font-semibold">
              <p>Currect Answer</p>
              <p>{score}/10</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[40rem]">
            {selectedQuiz ? (
              selectedQuiz.questions.map((question, index) => (
                <Link
                  key={question.id}
                  href={`/quiz/${question.id}`}
                  className="text-gray-900 w-full flex gap-1 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <p>{index + 1}.</p>
                  <p>{question.question}</p>
                </Link>
              ))
            ) : (
              <p className="text-white text-center">No questions found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
