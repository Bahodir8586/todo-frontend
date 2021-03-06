import React, {useState} from 'react';
import Login from "../components/Login";
import axios from "../components/axios";
import {useRouter} from "next/router";
import Cookies from 'js-cookie'

export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie?.split('; ').reduce((prevValue, currentValue) => {
        const key = currentValue.split('=')[0];
        prevValue[key] = currentValue.split('=')[1];
        return prevValue;
    }, {})
    if (cookies?.token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {props: {}}
}

const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const router = useRouter()
    const loginHandler = (email, password) => {
        axios.post('/users/login', {email, password}).then(response => {
            setErrorMessage("")
            Cookies.set('token', response.data.token)
            router.push('/')
        }).catch(error => {
            console.log(error.response)
            setErrorMessage(error.response?.data?.message)
        })
    }
    return (
        <Login submitForm={(e, p) => loginHandler(e, p)} errorMessage={errorMessage}/>
    );
};

export default LoginPage;
