import './Contact.css'
import { useState } from 'react';
import { validateEmail } from '../../utils';


const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact-section">
      <h2 className="heading">Contact</h2>
      <p id="prospective-client-message">
        The way this form will work - you'll get an email with the user's name, email, and whatever message they send. There is validation for the form so the fields can't be empty and the email must be structured like a valid email. In the spot I've got this text you could put a message to your prospective client, that they can leave a message about what they're interested in and you'll get back to them.
      </p>
      <form
        action="https://formsubmit.co/5479132c31c3525da4d928ffee3b1796"
        method="POST"
        id="contact-form"
      >
        <div className="form-line">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            placeholder='Name'
          />
        </div>
        <div className="form-line">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-line">
          <label htmlFor="message"></label>
          <textarea
            type="text"
            name="message"
            rows="10"
            defaultValue={message}
            onBlur={handleChange}
            placeholder="A brief message about what you're experiencing/interested in?"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
