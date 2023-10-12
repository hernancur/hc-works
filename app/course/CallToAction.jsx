"use client";

export default function CallToAction() {
  return (
    <div>
      <h4 className="text-center mb-2 font-InterBold">
        Bueno, mucho texto... Te espero dentro del curso!
      </h4>
      <div className="flex justify-center ">
        <button
          style={{ transition: "transform 0.2s ease-in-out" }}
          className="flex items-center justify-center mt-10 border border-neutral-700/30 rounded-md p-2 w-full bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold hover:scale-110 "
        >
          <a
            href="https://api.whatsapp.com/send?phone=59892956528&text=Hola%20quiero%20inscribirme%20al%20curso%20de%20introduccion%20me%20llamo:%20"
            target="blank"
            className="hover:text-orange-600"
          >
            ANOTARME
          </a>
        </button>
      </div>
    </div>
  );
}
