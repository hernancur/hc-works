"use client";

export default function Faqs() {
  return (
    <div>
      {/* <h4 className="text-center my-6 font-InterBold">Preguntas frecuentes</h4> */}
      <h2 className="text-center text-4xl dark:text-neutral-400 uppercase mt-8 mb-8">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="mx-auto text-center text-neutral-400 text-lg max-w-3xl mb-6">
        <div className="text-neutral-400 text-lg max-w-3xl mb-6">
          <span
            className="block w-full text-center"
            style={{ color: "#116f91" }}
          >
            ¿Hay qué saber algo previo o matemática difícil?
          </span>{" "}
          <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-6">
            No. No tienes porque tener conocimientos previos ni ser experto en
            matemática, puedes aprender comenzando{" "}
            <span style={{ color: "#fd3a02" }}> desde cero</span>. Programar no
            es resolver problemas matemáticos (aunque también se hace). Usaremos
            lógica basica y razonamiento. Además durante toda la cursada harás{" "}
            <span style={{ color: "#fd3a02" }}> tu propio proyecto </span> para
            aplicar los temas vistos en clase.
          </p>
          <span
            className="block w-full text-center"
            style={{ color: "#116f91" }}
          >
            ¿Debo tener computadora?
          </span>{" "}
          <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-6">
            Sí, computadora y conexión a internet. Ambas pueden ser básicas, no
            necesitas la última tecnología. El internet 3G también te sirve.
          </p>
          <span
            className="block w-full text-center"
            style={{ color: "#116f91" }}
          >
            ¿Quién es el profe?
          </span>{" "}
          <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-6">
            Soy Hernán García. Llevo +4 años enseñando y programando. Este es mi
            portafolio, podes 'chusmearlo' y ver{" "}
            <a
              style={{ color: "#fd3a02", textDecoration: "underline" }}
              href="/"
            >
              páginas web
            </a>{" "}
            que he creado y mi{" "}
            <a
              style={{ color: "#fd3a02", textDecoration: "underline" }}
              href="/experience"
            >
              experiencia
            </a>
            . Las clases serán por Jitsi, similar a zoom pero más fácil, en la
            web.
          </p>
          <span
            className="block w-full text-center"
            style={{ color: "#116f91" }}
          >
            ¿Duración?
          </span>{" "}
          <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-12">
            El curso se divide en{" "}
            <span style={{ color: "#fd3a02" }}>4 módulos</span>. Con una
            duración de 2 semanas por módulo con 2-3 clases semanales - horario
            a convenir - Terminaremos antes de la mitad de diciembre.
          </p>
        </div>
      </div>
    </div>
  );
}
