import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./adress.css";

export default function AdressPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const calculatedTotal = location.state?.calculatedTotal || 0;

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    shippingAddress: "",
    shippingState: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveAddress = () => {
    if (
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.shippingAddress &&
      formData.shippingState
    ) {
      setAddresses((prevAddresses) => [...prevAddresses, formData]);
      setFormData({
        name: "",
        phone: "",
        email: "",
        shippingAddress: "",
        shippingState: "",
      });
    } else {
      alert("Please fill in all fields to save the address.");
    }
  };

  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => prevAddresses.filter((_, i) => i !== index));
    if (selectedAddressIndex === index) setSelectedAddressIndex(null);
  };

  const handlePlaceOrder = () => {
    if (addresses.length === 1 || selectedAddressIndex !== null) {
      const address = addresses[selectedAddressIndex || 0];
      setIsOrderPlaced(true);
    } else {
      alert("Please select an address before placing the order.");
    }
  };

  return (
    <div className="addresspage">
      {!isOrderPlaced ? (
        <>
          <div className="field1">
            <h1>Address & Payment</h1>
            <form>
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                name="phone"
                placeholder="Phone 000-000-0000"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                name="shippingAddress"
                placeholder="Shipping Address"
                value={formData.shippingAddress}
                onChange={handleInputChange}
              />
              <textarea
                name="shippingState"
                placeholder="Shipping State"
                value={formData.shippingState}
                onChange={handleInputChange}
              />
            </form>

            <div className="payment">
              <h3>Payment Method:</h3>
              <select required className="selectPayment">
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="net-banking">Net Banking</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>

            <div>
              <button type="button" onClick={handleSaveAddress} className="placeOrder">
                Save Address
              </button>
              <button type="button" onClick={handlePlaceOrder} className="placeOrder">
                Place Order
              </button>
            </div>
          </div>

          <div className="price-details-sections">
            <h4>Price Details</h4>
            <div className="price-rows">
              <span>Total MRP (Inc. of Taxes)</span>
              <span>₹ {calculatedTotal}</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="price-row totals">
              <span>Order Total</span>
              <span>₹ {calculatedTotal}</span>
            </div>

            <h4>Saved Addresses</h4>
            {addresses.map((address, index) => (
              <div key={index} className="address-display">
                <input
                  type="radio"
                  name="selectedAddress"
                  checked={selectedAddressIndex === index}
                  onChange={() => setSelectedAddressIndex(index)}
                />
                <div>
                  <p>{address.name}</p>
                  <p>{address.phone}</p>
                  <p>{address.email}</p>
                  <p>{address.shippingAddress}</p>
                  <p>{address.shippingState}</p>
                </div>
                <button onClick={() => handleDeleteAddress(index)}>Delete</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="confirmation-section">
          <h2>Order Confirmed!</h2>
          <p>Your order will be sent to:</p>
          <div>
            <p>{addresses[selectedAddressIndex || 0].name}</p>
            <p>{addresses[selectedAddressIndex || 0].phone}</p>
            <p>{addresses[selectedAddressIndex || 0].email}</p>
            <p>{addresses[selectedAddressIndex || 0].shippingAddress}</p>
            <p>{addresses[selectedAddressIndex || 0].shippingState}</p>
          </div>
          <button onClick={() => navigate("/")} className="placeOrder">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}
