import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    { imageLink: "/math.jpg", category: "math" },
    { imageLink: "/science.jpg", category: "science" },
    { imageLink: "/history.jpg", category: "history" },
    { imageLink: "/programming.jpg", category: "programming" },
  ];

  return NextResponse.json(categories);
}
