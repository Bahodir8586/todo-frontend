import React, {useState} from 'react';
import {useRouter} from "next/router";
import axios from "../components/axios";
import Signup from "../components/Signup";

export async function getServerSideProps(context) {
    const jwt = context.req.headers.cookie?.split(';')[1]?.split('=')[1]
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

const SignupPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter()
    const signupHandler = (name, email, password, passwordConfirm) => {
        axios.post('/users/signup', {name, email, password, passwordConfirm}).then(response => {
            setErrorMessage("")
            console.log(response)
            router.push('/', '/')
        }).catch(error => {
            console.log(error.response)
            setErrorMessage(error.response?.data?.message)
        })
    }
    return (
        <Signup submitForm={(n, e, p, pc) => signupHandler(n, e, p, pc)} errorMessage={errorMessage}/>
    );
};

export default SignupPage;
