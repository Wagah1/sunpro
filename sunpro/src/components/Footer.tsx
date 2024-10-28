import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./footer.css";

const Footer = () => {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "location") setLocation(value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleCancel = () => {
    setSelectedService("");
    setName("");
    setEmail("");
    setMessage("");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailContent = `
      Customer message summary:
      
      Customer Name: ${name}
      Email address: ${email}
      Phone number: ${phone}
      Location: ${location}
      About: ${selectedService}
      Custom Message: ${message}
    `;

    const templateParams = {
      name: name,
      email: email,
      message: emailContent,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your meassage has been. Please await response from our team");
        },
        (err) => {
          console.error("FAILED", err);
          alert("Your message has not been sent, please retry after some time");
        }
      );
  };
  return (
    <div id="footer">
      <div className="contact-form">
        <h3>Contact us</h3>
        <p>Fill this form and we will get in touch with you</p>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <label htmlFor="service-select">Select a service:</label>
            <select
              id="service-select"
              value={selectedService}
              onChange={handleServiceChange}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Electrical Wiring">Electrical Wiring</option>
              <option value="CCTV Installation">CCTV Installation</option>
              <option value="Inquiry">Inquiry</option>
            </select>
          </div>
          <div className="fields">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="location">Town:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={handleMessageChange}
            />
          </div>

          <div id="action-btns">
            <button type="button" onClick={handleCancel} id="cancel">
              Cancel
            </button>
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="contact-details">
        <p>
          Sunpro Power Systems is your trusted and qualified partner for Solar
          Installation, Electrical Solutions, CCTV and Network connections, and
          Solar Water Heating Systems
        </p>
        <div id="address">
          <div className="address">
            <img src="call.png" alt="Call us" />
            <p>
              Call us on:
              <a href="tel:+254727895108"> +254727 895 108</a>
            </p>
          </div>
          <div className="address">
            <img src="whatsapp.png" alt="WhatsApp" />
            <p>
              Chat with us on WhatsApp:
              <a href="https://wa.me/+254727895108"> +254727 895 108</a>
            </p>
          </div>
          <div className="address">
            <img src="email.png" alt="send us an email" />
            <p>
              Email us on:
              <a href="mailto:georgewagah6@gmail.com">
                {" "}
                georgewagah6@gmail.com
              </a>
            </p>
          </div>
          <div className="address">
            <img src="location.png" alt="where to find us" />
            <p>We will serve you all over Kenya</p>
          </div>
          <div className="address">
            <img src="copyright.png" alt="copyrighted to" />
            <p>2024 - Sunpro Power Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
