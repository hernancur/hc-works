"use client";
import CustomCarousel from "../about/Carousel/Custom";
import { aboutImgs } from "../../utils/constants";

function Aboutpage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="text-xl font-InterBold relative max-w-full mx-auto px-8">
        <h2 className="text-center text-4xl dark:text-neutral-400 uppercase mt-14 mb-12">
          INTRODUCCIÓN A LA PROGRAMACIÓN WEB
        </h2>
        <CustomCarousel images={aboutImgs} style={{ width: "100%" }} />
        <h4 className="text-center my-6 font-InterBold">
          ¿Qué vas a aprender?
        </h4>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          El curso va desde los fundamentos básicos hasta los conceptos
          avanzados de como se construye desde cero una página web.
        </p>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          Hablaremos de interfaces, código, servidores, bases de datos y más!
        </p>
        <h4 className="text-center my-6 font-InterBold">¿Quién es el profe?</h4>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          Hola, soy el profe Hernán García. Tengo mas de 4 años de experiencia
          enseñando y algunos más escribiendo código. Este es mi portfolio,
          podes 'chusmearlo' para saber más de mi y de mi{" "}
          <a style={{ color: "#fd3a02" }} href="/experience">
            experiencia
          </a>
          .
        </p>

        <h4 className="text-center my-6 font-InterBold">Duración</h4>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          El curso se divide en{" "}
          <span style={{ color: "#fd3a02" }}>4 módulos</span>. Con una duración
          de 2 semanas por módulo. Y 2 clases semanales los días{" "}
          <span style={{ color: "#fd3a02" }}>martes y jueves</span> - horario a
          convenir -
        </p>

        <h4 className="text-center my-6 font-InterBold">¿Tiene costo?</h4>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          No tiene costo comenzar el curso. El primer módulo es abierto a todo
          público, podes venir a 'probar' si no estas seguro/a de que es lo
          tuyo, tal vez descubrís algo que te encanta!
        </p>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          El resto de los módulos (2,3,4) valen un único pago de $1200 pesos
          uruguayos. Cada módulo tiene una duración de 2 semanas
        </p>
        <h4 className="text-center my-6 font-InterBold">
          ¿Cómo se divide el curso?
        </h4>

        <h5 className="text-left my-4 font-InterBold">Módulo 1</h5>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          Aquí se ven los fundamentos
        </p>
        <h5 className="text-left my-4 font-InterBold">Módulo 2</h5>
        <p className=" text-left text-neutral-400 text-lg max-w-3xl">
          Ahora aprenderemos pensamiento lógico y a programar con Javascript
        </p>
      </div>
    </div>
  );
}

export default Aboutpage;
