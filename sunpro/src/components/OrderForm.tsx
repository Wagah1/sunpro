import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Item } from "./items";
import "./orderForm.css";

interface OrderFormProps {
  selectedItem: Item;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedItem, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [orderMessage, setOrderMessage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerTown, setCustomerTown] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "orderConfig") setSelectedOption(event.target.value);
    if (name === "orderMessage") setOrderMessage(value);
    if (name === "customerName") setCustomerName(value);
    if (name === "customerEmail") setCustomerEmail(value);
    if (name === "customerPhone") setCustomerPhone(value);
    if (name === "customerTown") setCustomerTown(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailContent = `
      Order Summary:
      
      Selected Item: ${selectedItem}
      Order configuration: ${selectedOption}
      Customer Name: ${customerName}
      Email address: ${customerEmail}
      Phone number: ${customerPhone}
      Location: ${customerTown}
      Custom Message: ${orderMessage || "No message provided"}
    `;

    const templateParams = {
      name: customerName,
      email: customerEmail,
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
          alert(
            "Your order submitted successfully. Await response from our team"
          );
        },
        (err) => {
          console.error("FAILED", err);
          alert("Your oreder has not been sent, please retry after some time");
        }
      );
  };

  return (
    <div className="order-form">
      <div className="item">
        <h3>
          Item details:
          <br /> {selectedItem.title}
        </h3>
        <p>
          {selectedItem.cap} <br /> <br /> Fill the next form to order this item
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="configuration">
          <h3>System Configuration</h3>
          <div className="radio">
            <p>
              Select your preferred configuration: <br />
            </p>
            <label>
              <input
                type="radio"
                name="orderConfig"
                value={selectedItem.priceDetails[0].desc}
                checked={selectedOption === selectedItem.priceDetails[0].desc}
                onChange={handleInputChange}
              />
              {selectedItem.priceDetails[0].desc +
                " Ksh " +
                selectedItem.priceDetails[0].price}
            </label>

            <label>
              <input
                type="radio"
                name="orderConfig"
                value={selectedItem.priceDetails[1].desc}
                checked={selectedOption === selectedItem.priceDetails[1].desc}
                onChange={handleInputChange}
              />
              {selectedItem.priceDetails[1].desc +
                " Ksh " +
                selectedItem.priceDetails[1].price}
            </label>

            <label>
              <input
                type="radio"
                name="orderConfig"
                value={selectedItem.priceDetails[2].desc}
                checked={selectedOption === selectedItem.priceDetails[2].desc}
                onChange={handleInputChange}
              />
              {selectedItem.priceDetails[2].desc +
                " Ksh " +
                selectedItem.priceDetails[2].price}
            </label>
          </div>

          <label htmlFor="order-message"></label>
          <textarea
            id="order-message"
            name="orderMessage"
            placeholder="Type any additional message here"
            value={orderMessage}
            onChange={(e) => setOrderMessage(e.target.value)}
          />
        </div>
        <div className="personal-info">
          <h3>Personal Information</h3>
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
            <label htmlFor="customer-county">Town:</label>
            <input
              type="text"
              id="customer-town"
              name="customerTown"
              value={customerTown}
              onChange={handleInputChange}
              required
            />
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

export default OrderForm;
