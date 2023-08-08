import React from "react";
import "./Form.jsx";
import { useState, useContext } from "react";
import { DetailContext } from "../../context/DetailContext.jsx";
import "./Form.css";
const Form = () => {
  const { show } = useContext(DetailContext);

  const [formData, setFormData] = useState({
    showName: show.name,
    name: "",
    email: "",
    date: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({
      showName: show.name,
      name: "",
      email: "",
      date: null,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Ticket</h2>
      <div>
        <label htmlFor="showName">Show Name:</label>
        <input
          type="text"
          name="showName"
          id="showName"
          value={formData.showName}
          onChange={handleInputChange}
          placeholder="Enter Show Name"
        />
      </div>
      <div>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter the Full Name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter the email Id"
        />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleInputChange}
          placeholder="Enter the date"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
