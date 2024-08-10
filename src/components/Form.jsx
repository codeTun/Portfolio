import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import validator from "email-validator";
import Button from "./Button";
import apiConfig from "../pages/contact/apiConfig";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (errorStateSetter) => {
    errorStateSetter(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.name === "" ? setNameError(true) : setNameError(false);
    formData.email === "" || !validator.validate(formData.email)
      ? setEmailError(true)
      : setEmailError(false);
    formData.subject === "" ? setSubjectError(true) : setSubjectError(false);
    formData.message === "" ? setMessageError(true) : setMessageError(false);

    if (
      nameError ||
      emailError ||
      messageError ||
      subjectError ||
      !validator.validate(formData.email) ||
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      setFormData({
        ...formData,
        email: "",
      });
      setSending(false);
      setFailed(true);
      return;
    }

    setSending(true);

    fetch(apiConfig.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        apikey: apiConfig.apiKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSending(false);
        setSuccess(true);
        setFailed(false);
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Form Submission Error:", err);
        setSending(false);
        setFailed(true);
      });
  };

  const handleButtonText = () => {
    if (sending) {
      return t("contact.form.loading");
    } else if (success) {
      return t("contact.form.success");
    } else if (
      failed ||
      nameError ||
      messageError ||
      emailError ||
      subjectError
    ) {
      return t("contact.form.failed");
    } else {
      return  t("contact.form.send");
    }
  };

  return (
    <motion.form
      action="https://api.web3forms.com/submit"
      method="POST"
      ref={ref}
      className="contactForm bg-transparent "
      initial={{ y: "10vw", opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="contentTitle">{t("contact.description")}</h4>
      <motion.div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className={`formControl bg-transparent ${nameError ? "formError" : ""}`}
          onFocus={() => {
            handleInputFocus(setNameError);
          }}
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder={
            nameError ? t("contact.form.nameError") : t("contact.form.name")
          }
          autoComplete="name"
        />
      </motion.div>
      <motion.div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className={`formControl bg-transparent ${emailError ? "formError" : ""}`}
          onFocus={() => {
            handleInputFocus(setEmailError);
          }}
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder={
            nameError ? t("contact.form.emailError") : t("contact.form.email")
          }
          autoComplete="email"
        />
      </motion.div>
      <motion.div className="col-12 formGroup">
        <input
          type="text"
          className={`formControl bg-transparent  ${subjectError ? "formError" : ""}`}
          onFocus={() => {
            handleInputFocus(setSubjectError);
          }}
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder={nameError ? t("contact.form.subjectError") : t("contact.form.subject")}
          autoComplete="off"
        />
      </motion.div>
      <motion.div className="col-12 formGroup">
        <textarea
          className={`formControl ${messageError ? "formError" : ""}`}
          onFocus={() => {
            handleInputFocus(setMessageError);
          }}
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder={nameError ? t("contact.form.messageError") : t("contact.form.message")}
          autoComplete="off"
        ></textarea>
      </motion.div>
      <motion.div className="col-12 formGroup formSubmit">
        <Button
          name={handleButtonText()}
          disabled={
            nameError ||
            messageError ||
            emailError ||
            subjectError ||
            sending ||
            success
          }
        />
      </motion.div>
    </motion.form>
  );
};

export default Form;
