"use client";
import CustomCarousel from "../about/Carousel/Custom";
import { courseImgs } from "../../utils/constants";
import Image from "next/image";
import Modules from "./Modules";
import Pricing from "./Pricing";
import Faqs from "./Faqs";
import CallToAction from "./CallToAction";

function Aboutpage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="text-xl font-InterBold relative max-w-full mx-auto px-8">
        <h2 className="text-center text-4xl dark:text-neutral-400 uppercase mt-14 mb-12">
          INTRODUCCIÓN A LA PROGRAMACIÓN WEB
        </h2>
        <CustomCarousel images={courseImgs} style={{ width: "100%" }} />
        <h4 className="text-center my-6 font-InterBold">
          ¿Qué vas a aprender?
        </h4>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl mb-6">
          <span style={{ color: "yellow" }}>
            JAVASCRIPT, HTML, CSS, SQL, entre otras tecnologías.
          </span>{" "}
          Desde los fundamentos básicos hasta los conceptos avanzados de como se
          construye desde cero una página web como la que estas leyendo.{" "}
          <span style={{ color: "#fd3a02" }}>
            Interfaces, código, servidores, bases de datos y más!
          </span>{" "}
        </p>

        <Image
          src="/course/html.jpg"
          width={700}
          height={200}
          alt="javascript"
          className="w-full h-48 rounded-lg object-cover mb-4"
        />
        {/* MODULOS */}
        <Modules />

        {/* FAQS */}
        <Faqs />


        <Image
          src="/course/js.jpg"
          width={700}
          height={200}
          alt="html"
          className="w-full h-48 rounded-lg object-cover mb-4"
        />

        {/* COSTO CURSADA */}
        <Pricing />

        {/* CALL TO ACTION */}
        <CallToAction />
      </div>
    </div>
  );
}

export default Aboutpage;
