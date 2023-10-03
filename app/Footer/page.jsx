import React from "react";

function Fpage() {
  return (
    <div className=" my-36 text-center">
      <span className="dark:text-neutral-600 text-sm font-InterBold">
        {" "}
        © {new Date().getFullYear()} Hernan Garcia{" "}
      </span>
      <p className="dark:text-neutral-500 text-base uppercase font-InterBlack">
        Feel free to send me a message.
      </p>
    </div>
  );
}

export default Fpage;
