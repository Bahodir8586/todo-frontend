import React from 'react';
import {useRouter} from "next/router";
import axios from "../components/axios";
import Signup from "../components/Signup";

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

const SignupPage = () => {
    const router = useRouter()
    const signupHandler = (name, email, password, passwordConfirm) => {
        axios.post('/users/signup', {name, email, password, passwordConfirm}).then(response => {
            console.log(response)
            router.push('/', '/')
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Signup submitForm={(n, e, p, pc) => signupHandler(n, e, p, pc)}/>
    );
};

export default SignupPage;
