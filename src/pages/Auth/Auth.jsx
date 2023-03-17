import {useState} from 'react'
import './Auth.css'

export default function AuthPage() {

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="form__main">
      <form className="form__block">
        <h2 className="form__name">Авторизация</h2>
        <div className="form__data">
          <h4 className="form__input_login">Логин</h4>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <h4 className="form__input_password">Пароль</h4>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form__buttons">
          <input type="submit" value="Авторизоваться" />
          <a href="/" className="form__forgetPass">
            Забыли пароль?
          </a>
        </div>
      </form>
    </div>
  );
}
