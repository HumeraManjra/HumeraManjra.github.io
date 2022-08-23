import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { useState, useEffect, useRef } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Contact() {
  const form = useRef();
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, SetFormValues] = useState(initialValues);
  const [formErrors, SetFormErrors] = useState({});
  const [isSubmit, SetIsSubmit] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email Format";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    console.log(values);
    return errors;
  };

  function sendEmail() {
    emailjs
      .sendForm(
        "service_9qim7hn",
        "template_iw9e3lr",
        form.current,
        "1D-DBk4x9vTQCo6Of"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    SetFormErrors(validate(formValues));
    SetIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendEmail();
      SetFormValues(initialValues);
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 4000);
    }
  }, [formErrors]);

  return (
    <section id="contact" className="section_center container">
      <h2>Contact</h2>
      {isAlertVisible && (
        <div className="submit__msg">
          <BsCheckCircleFill className="success__icon" />
          <h6>Your Message has been sent</h6>
        </div>
      )}
      <article className="form__wrapper">
        <form ref={form} action="" onSubmit={handleSubmit}>
          <div className="name__email__wrapper">
            <div className="name">
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              <p className="error">{formErrors.name}</p>
            </div>
            <div className="email">
              <label htmlFor="email">
                email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
            </div>
          </div>
          <div className="message__wrapper">
            <label htmlFor="message">
              message <span>*</span>
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <p className="error">{formErrors.message}</p>
          </div>
          <div className="btns_wrapper">
            <button className="send_msg_btn" type="submit">
              send message
            </button>
            <button
              className="reset_btn"
              type="reset"
              onClick={() => SetFormValues(initialValues)}
            >
              reset
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Contact;
