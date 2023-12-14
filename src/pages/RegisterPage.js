// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
 // const [day, setDay] = useState('');
 // const [month, setMonth] = useState('');
 // const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
 // const [phone, setPhone] = useState('');
 // const [addressLine1, setAddressLine1] = useState('');
 // const [province, setProvince] = useState('');
 // const [postalCode, setPostalCode] = useState('');
 // const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (
        !firstName ||
        !lastName ||
        //!day ||
        //!month ||
        //!year ||
        !email ||
       // !phone ||
       // !addressLine1 ||
       // !province ||
       // !postalCode ||
       // !country ||
        !password ||
        password !== confirmPassword
      ) {
        setError('Please fill in all fields and make sure passwords match.');
        return;
      }

      setLoading(true);
      // Perform registration logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Reset form inputs and error state
      setFirstName('');
      setLastName('');
    //  setDay('');
    //  setMonth('');
    //  setYear('');
      setEmail('');
    //  setPhone('');
    //  setAddressLine1('');
    //  setProvince('');
    //  setPostalCode('');
    //  setCountry('');
      setPassword('');
      setConfirmPassword('');
      setError(null);
      console.log('Registration successful!');

       // After successful registration, navigate to the login page
       navigate('/');
       
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content">
      <div className="register-form" id="registerForm">
        <h2>Register</h2>
        <form id="registerForm" onSubmit={handleRegister}>
        <div className="name-fields">
  <div className="name-field">
    <label htmlFor="firstName">First Name:</label>
    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
  </div>

  <div className="name-field">
    <label htmlFor="lastName">Last Name:</label>
    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
  </div>
</div>
          {/* Date of Birth */}
         {/*} <label>Date of Birth:</label>
          <div className="dob-inputs">
            <input type="text" placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} required />
            <input type="text" placeholder="Month" value={month} onChange={(e) => setMonth(e.target.value)} required />
            <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
  </div>*/}

          {/* Address Line 1 */}
          {/*<label htmlFor="addressLine1">Address Line 1:</label>
          <input type="text" id="addressLine1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} required />*/}

        {/* Province and Country on the same line */}
{/*<div className="location-fields">
  <div className="location-field">
    <label htmlFor="province">Province:</label>
    <input type="text" id="province" value={province} onChange={(e) => setProvince(e.target.value)} required />
  </div>

  <div className="location-field">
    <label htmlFor="country">Country:</label>
    <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
  </div>
        </div>*/}

          {/* Postal Code */}
         {/*} <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />*/}

          {/* Phone Number */}
         {/*} <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />*/}

          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        {/* Password and Confirm Password on the same line */}
<div className="password-fields">
  <div className="password-field">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
  </div>

  <div className="password-field">
    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
  </div>
</div>

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
