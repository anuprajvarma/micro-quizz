import React from "react";

interface Props {
  params: { category: string };
}

const Page = ({ params }: Props) => {
  return <div className="text-white">{params.category}</div>;
};

export default Page;
