import React, { useRef } from "react";
import "../styles/about.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const serviceId = "default_service";
const templateId = "template_c8segls";
const publicKey = "rZUzDLHjPiVUuMlz3";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Checks if name is empty
    if (form.current[0].value === "") {
      Swal.fire("Uh oh!", "Name can't be left blank.", "error");
      return;
    }

    // Checks if email is empty
    if (form.current[1].value === "") {
      Swal.fire("Uh oh!", "Email can't be left blank.", "error");
      return;
    }

    // Checks if message is empty
    if (form.current[2].value === "") {
      Swal.fire("Uh oh!", "Message can't be left blank.", "error");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log("Sent!");
        Swal.fire("Success!", "Message was successfully sent!", "success");
      },
      (error) => {
        console.log(error.text);
        Swal.fire("Uh oh!", "An unexpected error occurred.", "error");
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
