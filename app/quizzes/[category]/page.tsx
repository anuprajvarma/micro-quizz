import { ClientQuizPage } from "../../component/ClientQuizPage";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = params;

  return {
    title: `Quizzes - ${category}`,
    description: `Test your knowledge in the ${category} category.`,
  };
}

async function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quizzes?category=${category}`,
    {
      cache: "no-store",
    }
  );

  const selectedQuiz = await res.json();

  return <ClientQuizPage selectedQuiz={selectedQuiz} />;
}

export default Page;
