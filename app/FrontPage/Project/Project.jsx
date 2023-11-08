"use client";
import Link from "next/link";
import Image from "next/image";
import { projectsFrontPage } from "@/utils/constants";
import useHovered from "../useHovered";
import Status from "@/app/Status/page";

export default function Projects() {
  const { hoveredStates, enterCard, leaveCard } = useHovered();
  return (
    <div className="">
      {projectsFrontPage.map((each, i) => (
        <div key={i}>
          <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
            <div
              className="h-60 w-full md:w-64 relative"
              onMouseEnter={() => enterCard(i)}
              onMouseLeave={() => leaveCard(i)}
              style={{ transition: "transform 0.2s ease-in-out" }}
            >
              <Link target="blank" href={each.link}>
                <Image
                  width={850}
                  height={850}
                  alt="project"
                  className="w-full h-full object-cover rounded-md transition-transform transform scale-100 hover:scale-110"
                  src={hoveredStates[i] ? each.imgLink2 : each.imgLink}
                  priority={true}
                />
              </Link>
            </div>

            <div>
              <div className="w-fit flex items-center gap-x-2 ">
                <div className="px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                  <span>{each.year}</span>
                </div>
                <div className=" flex items-center gap-x-3">
                  <Status
                    Relaxing={each.status}
                    stat={each.status}
                    className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                  />
                </div>
              </div>

              <div>
                <h1
                  className={`font-InterBold text-lg max-w-lg mt-4 ${
                    hoveredStates[i] ? "text-orange-600" : ""
                  }  `}
                >
                  {each.title}
                </h1>
                <p
                  className={`text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg   `}
                >
                  {each.subT}
                </p>

                <Link target="blank" href={each.link}>
                  <button
                    style={{ transition: "transform 0.2s ease-in-out" }}
                    className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md   hover:scale-110 "
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
        </div>
      ))}
    </div>
  );
}
