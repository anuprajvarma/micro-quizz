import QuizzCategory from "./component/QuizzCategory";
import Link from "next/link";

type Category = {
  imageLink: string;
  category: string;
};

async function getCategories(): Promise<Category[]> {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    console.error("❌ BASE_URL not defined in environment variables.");
    return []; // Return empty array to avoid build crash
  }

  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch categories");
    return []; // Return empty array to avoid build crash
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

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[4rem]">
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
