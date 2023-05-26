import React, { useState } from 'react';
import { render } from 'react-dom';
import { logoUrl } from './logoUrl';
import './style.css';

let url = 'https://reqres.in/api/logi';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setErroor] = useState('');
  const [loginData, setLoginData] = useState([]);

  const handleLOgin = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (password === '' || email === '') {
      alert('Please Enter Data');
    }
    //checkBox should be checkin then only login Possible//
    if (!rememberMe) {
      alert('Please Accept the Terms & Conditions, checkIn CheckBox');
    }
    if (rememberMe) {
      const options = {
        method: 'POST',
        Headers: {
          Authorization:
            'Bearer https://reqre66666666666666666666666666s.in/api/unknown',
          'Content-type': 'application/json',
          body: JSON.stringify(userData),
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoginData([...loginData, userData]);
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className="login-form">
      <div>
        <img
          className="logo-wissly"
          alt="logo"
          src={logoUrl}
        />
      </div>
      <h4>Hello there, Sign in to continue</h4>

      <div>
        <form onSubmit={handleLOgin}>
          <div className="form-group">
            <label>Email</label> <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label> <br />
            <input
              type="password"
              value={password}
              data-testid="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group-check">
            <div>
              {' '}
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{' '}
            </div>
            <div className="rememberText">
              By creating or logging into an account, you are agreeing with our{' '}
              <b> Terms & Conditions</b> and <b>Privacy Policys</b>{' '}
            </div>
          </div>
          {error && <div>{error}</div>}
          <br />
          {error && <div>{error}</div>}
          <button type="submit" className="login-button">
            <b>Next </b>
          </button>
        </form>
        <div className="ssoTextBox">
          <h4 className="ssoText">Signin with company SSO</h4>
        </div>
        <div>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid gray', padding: '8px' }}>
                  Email
                </th>
                <th style={{ border: '1px solid gray', padding: '8px' }}>
                  Password
                </th>
              </tr>
            </thead>
            <tbody>
              {loginData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td style={{ border: '1px solid gray', padding: '8px' }}>
                      {' '}
                      {data.email}
                    </td>
                    <td style={{ border: '1px solid gray', padding: '8px' }}>
                      {' '}
                      {data.password}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
