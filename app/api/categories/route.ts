import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    { imageLink: "/math.avif", category: "math" },
    { imageLink: "/science.avif", category: "science" },
    { imageLink: "/history.avif", category: "history" },
    { imageLink: "/programming.avif", category: "programming" },
  ];

  return NextResponse.json(categories);
}
