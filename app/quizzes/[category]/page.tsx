import { ClientQuizPage } from "../../component/ClientQuizPage";

// import { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string };
// }): Promise<Metadata> {
//   const { category } = params;

//   return {
//     title: `Quizzes - ${category}`,
//     description: `Test your knowledge in the ${category} category.`,
//   };
// }

async function Page(props: Props) {
  //   const { category } = await params;
  const params = await props.params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quizzes?category=${params.category}`,
    {
      cache: "no-store",
    }
  );

  const selectedQuiz = await res.json();

  return <ClientQuizPage selectedQuiz={selectedQuiz} />;
}

export default Page;
