import Link from "next/link";
import { allQuizzes } from "@/data/dummuyData";

interface Props {
  params: { category: string };
}

const Page = async ({ params }: Props) => {
  const { category } = await params; // ✅ explicitly await
  console.log("Category:", category); // ✅ explicitly await
  const selectedQuiz = allQuizzes.find(
    (quiz) => quiz.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[3rem]">
          <p className="text-white text-5xl font-semibold text-center">
            Questions
          </p>
          <div className="flex flex-col gap-2 w-[40rem]">
            {selectedQuiz ? (
              selectedQuiz.questions.map((question, index) => (
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
              <p className="text-white text-center">No questions found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
