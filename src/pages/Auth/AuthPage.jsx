import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage({ login, password, setIsAuth }) {
  const [textInput, setTextInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmitFormAuth = (e) => {
    e.preventDefault();
    if (textInput && passwordInput) {
      if (textInput === login && passwordInput === password) {
        setError("");
        setIsAuth(true);
        navigate("/products");
      } else {
        setTextInput('')
        setPasswordInput('')
        setError("Неверный логин или пароль!");
      }
    } else {
      setError("Заполните все поля!")
    }
  };

  return (
    <div className="form__main">
      <form className="form__block" onSubmit={handleSubmitFormAuth}>
        <h2 className="form__name">Авторизация</h2>
        <div className="form__data">
          <h4 className="form__input_login">Логин</h4>
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <h4 className="form__input_password">Пароль</h4>
          <input
            type="password"
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
          />
        </div>
        {error}
        <div className="form__buttons">
          <input type="submit" value="Войти" />
          <a
            href="/"
            className="form__forgetPass"
            onClick={(e) => e.preventDefault()}
          >
            Забыли пароль?
          </a>
        </div>
      </form>
    </div>
  );
}
