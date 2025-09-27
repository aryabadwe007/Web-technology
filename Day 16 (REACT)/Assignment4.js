import React, { useState } from 'react';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // You can add further logic here (e.g., API call)
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      backgroundColor: '#f0f0f0' // Optional background
    }}>
      <form onSubmit={handleSubmit} style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "rgb(206, 84, 84)",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h1 style={{ fontStyle: "italic", color: "#fff" }}>FORM</h1>

        <div>
          <label style={{ color: "#fff" }}>Name: </label><br />
          <input
            style={{ padding: "5px", width: "100%" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div><br />

        <div>
          <label style={{ color: "#fff" }}>Email: </label><br />
          <input
            style={{ padding: "5px", width: "100%" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div><br />

        <div>
          <label style={{ color: "#fff" }}>Education Level: </label><br />
          <select
            style={{ padding: "5px", width: "100%" }}
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="UnderGrad">UnderGrad</option>
            <option value="Graduate">Graduate</option>
            <option value="PG">PG</option>
          </select>
        </div><br />

        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
