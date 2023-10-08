import React from "react";

function Fpage() {
  return (
    <div className="my-36 text-center">
      <p className="dark:text-neutral-500 text-base uppercase font-InterBlack">
        I'm enthusiastic about assisting with any queries you may have.
      </p>

      <span className="dark:text-neutral-600 text-sm font-InterBold">
        {" "}
        © {new Date().getFullYear()} Hernan Garcia{" "}
      </span>
    </div>
  );
}

export default Fpage;
