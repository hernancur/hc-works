"use client";

export default function Pricing() {
  return (
    <div>
      <h4 className="text-center my-6 font-InterBold">¿Tiene costo?</h4>
      <div className="mx-auto text-center text-neutral-400 text-lg max-w-3xl mb-6">
        <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-8">
          No tiene costo comenzar el curso.{" "}
          <span style={{ color: "#fd3a02" }}>
            {" "}
            El primer módulo es GRATUITO
          </span>{" "}
          y abierto a todo público, podes anotarte y 'probar' si no estas
          seguro/a, tal vez descubrís algo que te apasiona, si estás acá ya es
          una razón!
        </p>
        <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-8">
          El resto de los módulos (2,3,4) tienen un costo
          <span style={{ color: "#fd3a02" }}> único y total</span> de $900 pesos
          uruguayos - se puede pagar hasta en dos cuotas -
        </p>
        <p className=" text-center text-neutral-400 text-lg max-w-3xl mb-20">
          He hecho <span style={{ color: "#fd3a02" }}>todo lo posible</span>{" "}
          para hacer este curso accesible para todxs, se lo costoso que puede
          ser aprender estas habilidades en otros lugares.
        </p>
      </div>
    </div>
  );
}
