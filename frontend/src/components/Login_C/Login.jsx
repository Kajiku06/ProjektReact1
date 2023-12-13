import React, { useState } from 'react';
import axios from 'axios'; // Upewnij się, że moduł axios jest zainstalowany w Twoim projekcie
import 'bootstrap/dist/css/bootstrap.min.css'; // Importowanie styli Bootstrap
import 'react-notifications-component/dist/theme.css';
import './login.css';

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordPolicyError, setPasswordPolicyError] = useState('');
  const buttonText = showLogin ? 'Rejestracja' : 'Powrót do logowania';

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormToggle = () => {
    setShowLogin(!showLogin);
    setLoginError('');
    setPasswordPolicyError('');
    setUsername('');
    setPassword('');
    setEmail('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.get('http://localhost:8081/users');
        const users = response.data;

        const user = users.find(
          (user) => user.username === username && user.password === password
        );
  
        if (user) {
          setLoginError('');
          console.log('Zalogowano pomyślnie!');

        } else {
          
        }
      } catch (error) {
        console.error('Błąd podczas logowania:', error);
        setLoginError('Błąd logowania. Spróbuj ponownie później.');
      }
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
      
        const newUserData = {
          username,
          email,
          password,
        }

        try {
            const response = await fetch('http://localhost:8081/addusers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserData),
            });

            if (response.ok) {
                handleLogin();
                alert("Rejestracja udana! Kliknij ok aby się zalogować");
            } else {
                const errorData = await response.json(); 

                if (errorData && errorData.error) {
                    let errorMessage = errorData.error;
                    alert(errorMessage);
                } else {
                    console.error('Wystąpił problem podczas rejestracji');
                }
            }
        } catch (error) {
            console.error('Błąd podczas rejestracji:', error);
        }
      }

  const handleClearForm = () => {
    setUsername('');
    setPassword('');
    setEmail('');
    setLoginError('');
    setPasswordPolicyError('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2>{showLogin ? 'Formularz logowania' : 'Formularz rejestracji'}</h2>
          <form onSubmit={showLogin ? handleLoginSubmit : handleRegistrationSubmit}>
            {showLogin ? (
              <>
                <label>
                  Login:
                  <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                  Hasło:
                  <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit" className="btn btn-primary">Zaloguj</button>
              </>
            ) : (
              <>
                <label>
                  Login:
                  <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                  Hasło:
                  <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <div>
                  <p>Przeczytałem i akceptuję <a href="/polityka-prywatnosci">politykę prywatności</a>.</p>
                </div>
                <button type="submit" className="btn btn-success">Zarejestruj</button>
              </>
            )}
          </form>
          <button className="btn btn-link" onClick={handleFormToggle}>{buttonText}</button>
          <button className="btn btn-danger" onClick={handleClearForm}>Wyczyść formularz</button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;