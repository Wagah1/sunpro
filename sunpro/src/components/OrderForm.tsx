// OrderForm.tsx
import React from "react";
import { Item } from "./items";

interface OrderFormProps {
  selectedItem: Item;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ selectedItem, onClose }) => {
  return (
    <div className="order-form">
      <h3>Item details</h3>
      <button onClick={onClose}>Close</button> {/* Close button */}
      <label>Selected Item:</label>
      <select defaultValue={selectedItem.id}>
        <option value={selectedItem.id}>{selectedItem.title}</option>
      </select>
      <p>Caption: {selectedItem.cap}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" min="1" />
      <button type="submit">Submit Order</button>
    </div>
  );
};

export default OrderForm;
