import { NextResponse } from "next/server";
import { allQuizzes } from "@/data/dummuyData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json([], { status: 400 });
  }

  const quiz = allQuizzes.find(
    (q) => q.category.toLowerCase() === category.toLowerCase()
  );

  return NextResponse.json(quiz || {});
}
