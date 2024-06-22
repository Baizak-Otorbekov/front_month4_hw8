import React from "react";

const Login = () => {
    return (
        <div className="login-container">
            <h1>ДОБРО ПОЖАЛОВАТЬ</h1>
            <input type='text' placeholder="Имя пользователя" className="login-input" />
            <input type='password' placeholder="Пароль" className="login-input" />
            <button className="login-button">Войти</button>
            <h2>В МИР ВКУСА!!!</h2>
        </div>
    );
};

export default Login