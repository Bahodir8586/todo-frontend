import React from 'react';
import Login from "../components/Login";

const LoginPage = () => {
    const loginHandler = (email, password) => {
        console.log(email, password)
    }
    return (
        <Login submitForm={(e, p) => loginHandler(e, p)}/>
    );
};

export default LoginPage;
