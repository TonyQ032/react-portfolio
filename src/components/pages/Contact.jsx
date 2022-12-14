import React, { useRef } from "react";
import "../../styles/about.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../../styles/form.css";

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
    <section className="section-container contact-main">
      <h2 className="container-title">Contact Me!</h2>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="form-btn" type="submit" value="Send" />
        </form>

        <div className="about-info">
          <p>
            <span className="bold">Name: </span>Anthony Quinones
          </p>
          <p>
            <span className="bold">Title: </span>Full Stack Software Engineer
          </p>
          <p>
            <span className="bold">Email: </span>anthonyq032@gmail.com
          </p>
          <p>
            <span className="bold">Phone: </span>(909) 507-1224
          </p>
          <p>
            <span className="bold">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/anthony-quinones/"
              target="_blank"
              className="social-link"
            >
              Anthony-Quinones
            </a>
          </p>
          <p>
            <span className="bold">Github: </span>
            <a
              href="https://github.com/TonyQ032"
              target="_blank"
              className="social-link"
            >
              TonyQ032
            </a>
          </p>

          <p>
            <br />
            If you have any questions or comments please feel free to contact
            me! :)
          </p>
        </div>
      </div>
    </section>
  );
};
