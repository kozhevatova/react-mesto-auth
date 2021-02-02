import { useState } from "react";
import { loginEmail, loginPassword } from '../utils/constants';
import * as auth from '../utils/auth';
import { useHistory } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //запись в стейт текущие значения инпутов при вводе
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case loginEmail: setEmail(e.target.value);
        break;
      case loginPassword: setPassword(e.target.value);
        break;
      default:
        console.log(`Нет такого инпута: ${e.target.name}`);
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!email || !password) {
      return;
    }
    auth.authorize(email,password)
      .then((data) => {
        console.log('login',data)
        if(data.token) {
          setEmail('');
          setPassword('');
          handleLogin();
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" method="POST" onSubmit={handleSubmit}>
        <input className="login__input login__email" type="email" name="loginEmail" placeholder="Email" required
          id="email-input" value={email} onChange={handleInputChange}></input>
        <input className="login__input login__password" type="password" name="loginPassword" placeholder="Пароль" required
          id="password-input" value={password} onChange={handleInputChange}></input>
        <button className="login__submit-button" type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;