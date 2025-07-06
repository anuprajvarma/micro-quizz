"use client"; // ✅ Correct way to define client components

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../../redux/store";
interface questionType {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

type Quiz = {
  category: string;
  imageLink: string;
  questions: questionType[];
};

function ClientQuizPage({ selectedQuiz }: { selectedQuiz: Quiz }) {
  const questions = useSelector((state: RootState) => state.Questions);
  const score = useSelector((state: RootState) => state.Score);
  const router = useRouter();

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-[3rem]">
            <p className="text-white text-5xl font-semibold text-center">
              Questions
            </p>
            <div className="flex justify-between text-white text-lg font-semibold">
              <p>Score</p>
              <p>{score}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[40rem]">
            {selectedQuiz?.questions?.length > 0 ? (
              selectedQuiz.questions.map(
                (question: questionType, index: number) => (
                  <button
                    disabled={questions.some((q) => q.id === question.id)}
                    key={question.id}
                    onClick={() => router.push(`/quiz/${question.id}`)}
                    className="text-gray-900 w-full flex justify-between cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <div className="flex gap-1">
                      <p>{index + 1}.</p>
                      <p>{question.question}</p>
                    </div>
                    <p className="text-gray-500">
                      {questions.some((q) => q.id === question.id)
                        ? "Answered"
                        : "Not Answered"}
                    </p>
                  </button>
                )
              )
            ) : (
              <p className="text-white text-center">No questions found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ClientQuizPage };
