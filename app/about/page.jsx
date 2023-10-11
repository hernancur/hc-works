"use client";
import CustomCarousel from "./Carousel/Custom";
import { aboutImgs } from "../../utils/constants";

function Aboutpage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative max-w-5xl mx-auto px-8">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase mt-14">
          ABOUT ME
        </h2>
        <p className="mt-16 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          Mi objetivo es simple: crear cosas excepcionales con personas
          excepcionales.
        </p>
        <CustomCarousel images={aboutImgs} style={{ width: "100%" }} />
        <h4 className="my-11 font-InterBold">Sobre mí</h4>
        <p className="my-9">
          Apasionado por la Fórmula 1, los deportes y la lectura. Me encanta
          explorar nuevos lugares y culturas.
        </p>
        <h4 className="my-11 font-InterBold">Cómo empezó todo</h4>
        <p className="my-9">
          Durante mis años antes de la pandemia, el código captó mi atención.
          Javascript fue muy intuitivo para mí.
        </p>
        <h4 className="my-10 font-InterBold">Lo que está por venir</h4>
        <p className="my-10">
          Como ingeniero, estoy interesado en aprender de mis compañeros e
          introducir a nuevas personas al desarrollo web.
        </p>
        <h4 className="font-InterBold">Tecnologías</h4>
      </div>
    </div>
  );
}

export default Aboutpage;
