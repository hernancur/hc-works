"use client";
import CustomCarousel from "../about/Carousel/Custom";
import { courseImgs } from "../../utils/constants";
import Image from "next/image";
import Modules from "./Modules";
import Pricing from "./Pricing";
import Faqs from "./Faqs";
import CallToAction from "./CallToAction";
import Marquee from "../FrontPage/Marquee/Marquee";

function Aboutpage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="text-xl font-InterBold relative max-w-full mx-auto px-8">
        <h2
          className="text-center text-white-400 dark:text-neutral-400 text-4xl dark:text-neutral-400 uppercase mt-14 mb-12"
        >
          INTRODUCCIÓN A LA PROGRAMACIÓN WEB
        </h2>
        <h4 className="text-center my-6 font-InterBold">
          ¿Qué vas a aprender?
        </h4>
        <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-6">
          Entenderás como funcionan las apps que usas todos los dias (Instagram,
          X, BeReal). Pasaremos enseguida a{" "}
          <span style={{ color: "#fd3a02" }}>
            JAVASCRIPT, HTML, CSS, entre otras tecnologías.
          </span>{" "}
          Desde los fundamentos básicos hasta los conceptos avanzados de como se
          construye desde cero una página/aplicación.{" "}
          <span style={{ color: "#fd3a02" }}>
            Interfaces, código, servidores, bases de datos y más!
          </span>{" "}
        </p>

        <CustomCarousel images={courseImgs} style={{ width: "100%" }} />

        <Marquee text={"MÓDULOS"} />

        {/* MODULOS */}
        <Modules />
        <Image
          src="/course/html.jpg"
          width={600}
          height={200}
          alt="html"
          className="h-48 rounded-lg object-cover mb-12"
          style={{ width: "100%" }}
        />
        <Marquee text={"FAQS"} />
        {/* FAQS */}
        <Faqs />

        <Image
          src="/course/girl.png"
          width={600}
          height={200}
          alt="coding"
          className="h-48 rounded-lg object-cover mb-12"
          style={{ width: "100%" }}
        />

        {/* COSTO CURSADA */}
        <Pricing />

        {/* CALL TO ACTION */}
        <Marquee text={"INSCRIPCIONES"} />

        <CallToAction />
      </div>
    </div>
  );
}

export default Aboutpage;
