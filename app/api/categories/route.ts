import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    {
      imageLink:
        "https://res.cloudinary.com/anupraj/image/upload/v1656589400/m5f8jkfirkghodqx4i6m.jpg",
      category: "math",
    },
    { imageLink: "/science.jpg", category: "science" },
    { imageLink: "/history.jpg", category: "history" },
    { imageLink: "/programming.jpg", category: "programming" },
  ];

  return NextResponse.json(categories);
}
