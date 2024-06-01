import  { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [responseMessage, setResponseMessage] = useState("");

    const sendEmail = event => {
        event.preventDefault();
        const params = new URLSearchParams();
        params.append('firstName', state.firstName);
        params.append('lastName', state.lastName);
        params.append('email', state.email);
        params.append('phone', state.phone);
        params.append('message', state.message);

        axios.post('https://meteoben.com/contact.php', params)
        .then(response => {
            console.log(response);
            setResponseMessage("Votre message a été envoyé avec succès !");
            // Reset state here
            setState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: ""
            });
        })
        .catch(error => {
            console.log(error);
            setResponseMessage("Une erreur s'est produite lors de l'envoi de votre message.");
        });
};

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <form onSubmit={sendEmail}>
            <input type="text" name="firstName" onChange={onInputChange} value={state.firstName} placeholder="Votre prénom" required />
            <input type="text" name="lastName" onChange={onInputChange} value={state.lastName} placeholder="Votre nom" required />
            <input type="email" name="email" onChange={onInputChange} value={state.email} placeholder="Votre email" required />
            <input type="tel" name="phone" onChange={onInputChange} value={state.phone} placeholder="Votre téléphone" required />
            <textarea name="message" onChange={onInputChange} value={state.message} placeholder="Parlez moi de votre projet" required></textarea>
            <button type="submit">Envoyer</button>
            {responseMessage && <p>{responseMessage}</p>}
        </form>
    );
}

export default Contact;