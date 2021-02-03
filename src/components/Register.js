import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { loginEmail, loginPassword } from '../utils/constants';
import * as auth from '../utils/auth';

const Register = ({ handleRegisterOpen, handleRegister }) => {
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
    if (!email || !password) {
      return;
    }
    auth.register(email, password)
      .then((res) => {
        if (res) {
          handleRegister(true);
          history.push('/sign-in');
        } else {
          handleRegister(false);
          console.log('Error');
        }
      })
      .catch((err) => {
        handleSubmit(false);
        console.log(err);
      });
  }

  return (
    <div className="login login_type_register">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input className="login__input login__email" type="email" name="loginEmail" placeholder="Email"
          required id="email-input" value={email} onChange={handleInputChange}
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b"
        ></input>
        <input className="login__input login__password" type="password" name="loginPassword" placeholder="Пароль"
          required id="password-input" value={password} onChange={handleInputChange}></input>
        <button className="login__submit-button" type="submit">Зарегистрироваться</button>
        <p className="login__text">Уже зарегистрированы?
          <NavLink to="/sign-in" className="login__link" onClick={handleRegisterOpen}>Войти</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;