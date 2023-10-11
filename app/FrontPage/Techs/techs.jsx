"use client";
import Link from "next/link";
import useHovered from "../useHovered";
import Image from "next/image";
import { techStack } from "@/utils/constants";
import { useState } from "react";

export default function Techs() {
  const { hoveredTech, enterTech, leaveTech } = useHovered();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex gap-4 my-6 flex-wrap justify-center">
      {techStack.map((tech, i) => (
        <Link key={i} target="blank" href={tech.href}>
          <div
            className={`rounded-lg p-3 border border-neutral-700 dark:border-neutral-800 ${
              hoveredTech[i] ? "hover:scale-110" : ""
            } flex flex-col align-center items-center justify-center `}
            onMouseEnter={() => enterTech(i)}
            onMouseLeave={() => leaveTech(i)}
            style={{
              transition: "transform 0.2s ease-in-out ",
              width: "110px",
              height: "110px",
            }}
          >
            <Image width={50} height={50} src={tech.icon} alt={tech.name} />

            <h3 className={`font-InterBold text-gray-500 text-sm mt-2`}>
              {tech.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
