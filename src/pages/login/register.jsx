import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
        Phone: phone,
        Address: address,
      });

      // Registration successful, handle the response
      console.log(response.data);
      // Redirect to the login page or perform other actions

    } catch (error) {
      // Registration failed, handle the error
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('An error occurred during registration.');
      }
    }
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Register</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button type="submit">Register</button>
        </form>
      </Modal>
    </div>
  );
};

export default RegisterForm;
