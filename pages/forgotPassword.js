import React, {useState} from 'react';
import ForgotPasswordForm from "../components/ForgotPassword";
import axios from "../components/axios";
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

const ForgotPassword = () => {
    const [showForm, setShowForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const forgotPasswordHandler = (email) => {
        axios.post('/users/forgotPassword', {email}).then(response => {
            setErrorMessage("")
            console.log(response)
            setShowForm(false)
        }).catch(error => {
            console.log(error.response?.data?.message)
            setErrorMessage(error.response?.data?.message)
        })
    }
    return (
        <>
            {showForm ?
                <ForgotPasswordForm submitForm={(e) => forgotPasswordHandler(e)} errorMessage={errorMessage}/> :
                <>
                    <div className={"text-2xl font-semibold my-20 text-center"}>
                        Your token is sent to your mail
                        <span className={"text-blue-500 cursor-pointer hover:underline hover:text-blue-700 block"}
                              onClick={() => setShowForm(true)}>Resend it</span>
                    </div>
                </>
            }
        </>
    );
};

export default ForgotPassword;
