import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Unit } from "./cctv";
import "./cctvForm.css";

interface CCTVFormProps {
  selected: Unit;
  onClose: () => void;
}

const CCTVForm: React.FC<CCTVFormProps> = ({ selected, onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderQuantity, setOrderQuantity] = useState<number>(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "orderQuantity") setOrderQuantity(Number(value));
    if (name === "customerName") setCustomerName(value);
    if (name === "customerEmail") setCustomerEmail(value);
    if (name === "customerPhone") setCustomerPhone(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailContent =
      "Needed: " +
      orderQuantity.toString() +
      " unit(s) of " +
      selected.name +
      ".\nContact me on: " +
      customerPhone +
      " or via email address: " +
      customerEmail;

    const templateParams = {
      from_name: customerName,
      message: emailContent,
      customer_email: customerEmail,
      customer_phone: customerPhone,
    };

    const serviceID = "default_service";
    const templateID = "template_k1fqtqp";
    const userID = "aJpaBhT-WGFzmjYaH";

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Your order submitted successfully. Await response from our team"
        );
      },
      (err) => {
        console.error("FAILED", err);
        alert("Your order has not been sent, please retry after some time");
      }
    );
  };

  return (
    <div className="cctv-form" id="cctv-view">
      <div className="cctv-det" id="cctv-det">
        <h3>
          CCTV kit details:
          <br /> {selected.name} @{" "}
          <span className="bold"> Ksh {selected.price}/-</span>
        </h3>
        <p>
          Package contains: <br />
          <ul>
            {selected.content.map((unit, index) => (
              <li key={index}>{unit}</li>
            ))}
          </ul>
          <br /> <a href="#footer">Contact us</a> or Fill this form to order:
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="customer">
          <h3>Order details:</h3>
          <div className="info-detail">
            <label htmlFor="customer-name">Your name:</label>
            <input
              type="name"
              id="customer-name"
              name="customerName"
              value={customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="info-detail">
            <label htmlFor="customer-name">Email address:</label>
            <input
              type="email"
              id="customer-email"
              name="customerEmail"
              value={customerEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="info-detail">
            <label htmlFor="customer-phone">Phone number:</label>
            <input
              type="phone"
              id="customer-phone"
              name="customerPhone"
              value={customerPhone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="info-detail">
            <label htmlFor="orderQuantity">Quantity:</label>
            <input
              id="orderQuantity"
              type="number"
              name="orderQuantity"
              value={orderQuantity}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          <div className="total">
            <p>
              Total cost:{" "}
              <span className="bold">
                Ksh {selected.price * orderQuantity}/-{" "}
              </span>
            </p>
          </div>
          <div className="end-buttons">
            <button onClick={onClose} id="close">
              Cancel
            </button>
            <button type="submit" id="submit">
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CCTVForm;
