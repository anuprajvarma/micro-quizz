import QuizzCategory from "./component/QuizzCategory";
import Link from "next/link";

type Category = {
  imageLink: string;
  category: string;
};

async function getCategories(): Promise<Category[]> {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data;
}

export const metadata = {
  title: "Quiz Categories - MicroQuizz",
  description:
    "Explore quiz categories like History, Math, Programming, and Science.",
};

export default async function Home() {
  const categories = await getCategories();
  console.log(
    `process.env.NEXT_PUBLIC_BASE_URL`,
    process.env.NEXT_PUBLIC_BASE_URL
  );

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[6rem]">
          <p className="text-white text-5xl font-semibold text-center">
            Quiz Categories
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((cat) => (
              <Link href={`/quiz/${cat.category}`} key={cat.category}>
                <QuizzCategory
                  imageLink={cat.imageLink}
                  category={cat.category}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
