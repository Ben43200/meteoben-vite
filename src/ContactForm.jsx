import { useState } from "react";
import "./contact.scss";

const ContactForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Envoyer");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("En cours d'envoi...");
    let response = await fetch(
      "https://ekklesia-server.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      }
    );
    let result = await response.json();
    setButtonText("Envoyer");
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "C'est bon, Votre message nous a bien été transmis",
      });
    } else {
      setStatus({
        success: false,
        message: "Oups il y a eu une erreur, réessayez plus tard...",
      });
      // return true
    }
  };

  return (
    <div className="form-container">
      {/* <h1>Contact Us</h1> */}
      <p>N'hésitez pas à me contacter si vous avez des questions, attendez bien de voir la phrase de confirmation de votre envoi.</p>
      <form className="form-inner" onSubmit={HandleSubmit}>
        <div className="row">
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="Votre Prénom"
            // required name="Pas "
            required
            pattern=".{3,}"
            title="Au moins trois charactères"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Votre Nom"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
            required
            pattern=".{2,}"
            title="Au moins deux charactères"
          />
        </div>
        <div className="row">
          <input
            type="email"
            value={formDetails.email}
            placeholder="Votre adresse E-mail"
            required
            pattern="^(http(s){0,1}:\/\/.){0,1}[\-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$"
            // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
            // pattern="[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
            maxLength="64"
            //  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Téléphone (facultatif)"
            // pattern="(0|\\+33|0033)[1-9][0-9]{8}"
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
        </div>
        <div className="row">
          <textarea
            rows="6"
            value={formDetails.message}
            placeholder="Parlez moi de votre projet"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
        </div>
        <button type="submit">{buttonText}</button>
        {status.message && (
          <div className="row">
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
