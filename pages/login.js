import React from 'react';
import Login from "../components/Login";
import axios from "../components/axios";
import {useRouter} from "next/router";
import Cookies from 'js-cookie'

export async function getServerSideProps(context) {
    const jwt = context.req.headers.cookie?.split(';')[1]?.split('=')[1]
    console.log(jwt)
    if (jwt) {
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
    const router = useRouter()
    const loginHandler = (email, password) => {
        axios.post('/users/login', {email, password}).then(response => {
            Cookies.set('token', response.data.token)
            router.push('/')
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Login submitForm={(e, p) => loginHandler(e, p)}/>
    );
};

export default LoginPage;
