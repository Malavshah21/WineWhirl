import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }

      // Show loading indicator while processing
      setLoading(true);

      // Perform login logic here (e.g., make an API request)
      // Replace the following line with your actual login implementation
      // For demonstration purposes, we'll simulate a successful login after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form inputs and error state
      setEmail('');
      setPassword('');
      setError(null);

      navigate('/home');

      // Log the user in (you might want to redirect to another page)
      console.log('Login successful!');
    } catch (error) {
      // Handle login failure
      setError('Invalid email or password.');
    } finally {
      // Hide loading indicator
      setLoading(false);
    }
  };

  return (
    <div className="content">
      <div className="login-form" id="loginForm">
        <br></br>
        <h2>Login Page</h2>
        <form onSubmit={handleLogin} id="loginForm">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {error && <p className="error-message">{error}</p>}
          <p>
            Don't have an account?
            <Link to="/register"> Click to register</Link>
          </p>
          <Link to="/logout">Logout</Link>
        </form>
      </div>
    </div>
  );
};

export default Profile;
