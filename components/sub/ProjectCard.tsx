import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-transform transform hover:scale-105">
      <Image
        src={src}
        alt={title}
        // layout="fill"
        objectFit="cover"
        width={1000}
        height={1000}
        className="w-full h-64 object-cover"
      />
      <div className="relative p-4 bg-gradient-to-b from-transparent to-black">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
