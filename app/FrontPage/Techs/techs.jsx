"use client";
import Link from "next/link";
import useHovered from "../useHovered";
import Image from "next/image";
import { techStack } from "@/utils/constants";

export default function Techs() {
  const { hoveredTech, enterTech, leaveTech } = useHovered();

  return (
    <div className="flex gap-x-4 my-6">
      {techStack.map((tech, i) => (
        <Link key={i} target="blank" href={tech.href}>
          <div
            className={`rounded-lg p-3 border border-neutral-700 dark:border-neutral-800 ${
              hoveredTech[i] ? "hover:scale-110" : ""
            }`}
            onMouseEnter={() => enterTech(i)}
            onMouseLeave={() => leaveTech(i)}
            style={{ transition: "transform 0.1s ease-in-out" }}
          >
            <Image width={50} height={50} src={tech.icon} alt={tech.name} />
            <h3 className="font-InterBold text-lg mt-2">{tech.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
