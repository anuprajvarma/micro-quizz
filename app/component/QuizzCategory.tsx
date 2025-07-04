import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const QuizzCategory = ({
  imageLink,
  category,
}: {
  imageLink: string;
  category: string;
}) => {
  return (
    <Link href="#" className="rounded-lg cursor-pointer">
      <div className="relative flex h-[18rem] w-[20rem]">
        <Image
          className="rounded-lg"
          src={imageLink}
          alt={category}
          quality={100}
          sizes="80px"
          fill
          style={{ objectFit: "cover" }}
        />
        <MdArrowOutward className="absolute right-3 top-3" size={30} />
        <p className="absolute top-3 left-3 font-semibold">{category}</p>
      </div>
    </Link>
  );
};

export default QuizzCategory;
