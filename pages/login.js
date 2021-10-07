import React from 'react';
import Login from "../components/Login";
import axios from "../components/axios";
import {useRouter} from "next/router";

export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    if (cookies?.split("=")[1]) {
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
        console.log(email, password)
        axios.post('/users/login', {email, password}).then(response => {
            console.log(response)
            router.push('/', '/')
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Login submitForm={(e, p) => loginHandler(e, p)}/>
    );
};

export default LoginPage;
