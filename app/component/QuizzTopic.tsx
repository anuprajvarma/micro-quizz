import Link from "next/link";
import React from "react";

const QuizzTitle = ({ title, id }: { title: string; id: string }) => {
  return (
    <Link
      href={`/quiz/${id}`}
      className="flex flex-col min-w-[15rem] px-6 py-4 border rounded-lg shadow-sm bg-gray-800 border-gray-700 hover:bg-gray-700"
    >
      <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-end text-gray-700 dark:text-gray-400">
        10 Qs
      </p>
    </Link>
  );
};

export default QuizzTitle;
