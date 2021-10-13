import React, {useState} from 'react';
import {useRouter} from "next/router";
import ResetPasswordForm from "../../components/ResetPassword";
import axios from "../../components/axios";
import Cookies from "js-cookie";

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

const ResetPassword = () => {
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState("")
    const resetPasswordHandler = (password, passwordConfirm) => {
        const token = router.asPath.split("/")[2];
        console.log(token, password, passwordConfirm)
        axios.patch(`/users/resetPassword/${token}`, {password, passwordConfirm}).then((response) => {
            setErrorMessage("")
            console.log(response)
            Cookies.set('token', response.data.token)
            router.push('/')
        }).catch(error => {
            setErrorMessage(error.response?.data?.message)
        })
    }
    return (
        <ResetPasswordForm submitForm={(p, pc) => resetPasswordHandler(p, pc)} errorMessage={errorMessage}/>
    );
};

export default ResetPassword;
