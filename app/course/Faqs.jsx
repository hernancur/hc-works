"use client";

export default function Faqs() {
  return (
    <div>
      {/* <h4 className="text-center my-6 font-InterBold">Preguntas frecuentes</h4> */}
      <h2 className="text-center text-4xl dark:text-neutral-400 uppercase mt-8 mb-8">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="text-neutral-400 text-lg max-w-3xl mb-6">
        <span className="block w-full text-center" style={{ color: "yellow" }}>
          ¿Hay qué saber matemática difícil?
        </span>{" "}
        <p className=" text-left text-neutral-400 text-lg max-w-3xl mb-6">
          No. Programar no es resolver problemas matemáticos (aunque se puede).
          Usaremos lógica basica y razonamiento.
        </p>
        <span className="block w-full text-center" style={{ color: "yellow" }}>
          ¿Debo tener computadora?
        </span>{" "}
        <p className=" text-left text-neutral-400 text-lg max-w-3xl mb-6">
          Sí, computadora y conexión a internet. Ambas pueden ser básicas, no
          necesitas la última tecnología. El internet 3G también te sirve.
        </p>
        <span className="block w-full text-center" style={{ color: "yellow" }}>
          ¿Quién es el profe?
        </span>{" "}
        <p className=" text-left text-neutral-400 text-lg max-w-3xl mb-6">
          Soy Hernán García. Tengo +4 años de experiencia enseñando y
          programando. Este es mi portafolio, podes 'chusmearlo' y ver{" "}
          <a style={{ color: "#fd3a02", textDecoration: "underline" }} href="/">
            páginas web
          </a>{" "}
          que he creado y mi{" "}
          <a
            style={{ color: "#fd3a02", textDecoration: "underline" }}
            href="/experience"
          >
            experiencia
          </a>
          .
        </p>
        <span className="block w-full text-center" style={{ color: "yellow" }}>
          ¿Cuanto dura / Debo saber algo previo?
        </span>{" "}
        <p className=" text-left text-neutral-400 text-lg max-w-3xl mb-6">
          El curso se divide en{" "}
          <span style={{ color: "#fd3a02" }}>4 módulos</span>. Con una duración
          de 2 semanas por módulo. Y 2 clases semanales los días{" "}
          <span style={{ color: "#fd3a02" }}>martes y jueves</span> - horario a
          convenir - No tienes porque tener conocimientos previos, puedes
          aprender comenzando{" "}
          <span style={{ color: "#fd3a02" }}> desde cero</span>. Además durante
          toda la cursada harás tu propio proyecto para aplicar los temas vistos
          en clase.
        </p>
      </div>
    </div>
  );
}
