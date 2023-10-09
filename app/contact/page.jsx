"use client";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Validaciones
    let newErrors = { ...errors };
    switch (e.target.name) {
      case "user_name":
        newErrors.user_name = !e.target.value;
        newErrors.user_name = !e.target.value || /\d/.test(e.target.value);
        break;
      case "user_email":
        newErrors.user_email = !/\S+@\S+\.\S+/.test(e.target.value);
        break;
      case "message":
        newErrors.message = e.target.value.length <= 10;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Verificar si hay errores antes de enviar el formulario
    if (Object.values(errors).some((error) => error)) {
      console.log("El formulario contiene errores");
      return;
    }

    console.log("Enviando formulario", form);
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <div id="pp" className="mt-44 flex flex-col items-center">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase">
          Get in touch
        </h2>
        <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          Maybe a meeting or a free quote? Let me know.
        </p>
        <form
          className="contact-form my-8 p-2 rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name / company name"
            onChange={handleInputChange}
            className={`border ${
              errors.user_name ? "border-red-500" : "border-neutral-700"
            } rounded-md w-full px-2 p-1 mb-4`}
          />
          <p
            className={`text-red-500 w-full px-2  mb-4 ${
              errors.user_name ? "visible" : "invisible"
            }`}
          >
            This field is required and should not include numbers
          </p>

          <input
            type="email"
            placeholder="youremail@company.com"
            name="user_email"
            onChange={handleInputChange}
            className={`border ${
              errors.user_email ? "border-red-500" : "border-neutral-700"
            } rounded-md w-full px-2 p-1 mb-4`}
          />
          <p
            className={`text-red-500 w-full px-2  mb-4 ${
              errors.user_email ? "visible" : "invisible"
            }`}
          >
            Please enter a valid email
          </p>

          <textarea
            placeholder="How can I help you?"
            name="message"
            onChange={handleInputChange}
            className={`border ${
              errors.message ? "border-red-500" : "border-neutral-700"
            } rounded-md w-full h-36 px-2 p-1 mb-4`}
          />
          <p
            className={`text-red-500 w-full px-2  mb-4 ${
              errors.message ? "visible" : "invisible"
            }`}
          >
            The message must be more than 10 characters
          </p>
          <input
            type="submit"
            value="Send"
            className="mt-10 border border-neutral-700/30 rounded-md px-2 py-2 flex justify-center items-center gap-x-2 w-full bg-neutral-800/20 text-sm text-neutral-900 dark:text-neutral-200 font-semibold"
          />
        </form>
      </div>
      <div id="pp" className="mt-44 flex flex-col items-center">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase">
          Get in touch
        </h2>
        <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          Maybe a meeting or a free quote? Let me know.
        </p>
        <form
          className="contact-form my-8 p-2 rounded-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name / company name"
            onChange={handleInputChange}
            className={`border ${
              errors.user_name ? "border-red-500" : "border-neutral-700"
            } rounded-md w-full px-2 p-1 mb-4`}
          />
          <p
            className={`text-red-500 w-full px-2  mb-4 ${
              errors.user_name ? "visible" : "invisible"
            }`}
          >
            This field is required and should not include numbers
          </p>

          <input
            type="email"
            placeholder="youremail@company.com"
            name="user_email"
            onChange={handleInputChange}
            className={`border ${
              errors.user_email ? "border-red-500" : "border-neutral-700"
            } rounded-md w-full px-2 p-1 mb-4`}
          />
          <p
            className={`text-red-500 w-full px-2  mb-4 ${
              errors.user_email ? "visible" : "invisible"
            }`}
          >
            Please enter a valid email
          </p>

          <textarea
            placeholder="How can I help you?"
            name="message"
            onChange={handleInputChange}
            className={`border ${
              errors.message ? "border-red-500" : "border-neutral-700"
            } rounded-md w-full h-36 px-2 p-1 mb-4`}
          />
          <p
            className={`text-red-500 w-full px-2  mb-4 ${
              errors.message ? "visible" : "invisible"
            }`}
          >
            The message must be more than 10 characters
          </p>
          <input
            type="submit"
            value="Send"
            className="mt-10 border border-neutral-700/30 rounded-md px-2 py-2 flex justify-center items-center gap-x-2 w-full bg-neutral-800/20 text-sm text-neutral-900 dark:text-neutral-200 font-semibold"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
