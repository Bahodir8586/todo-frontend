import React from 'react';
import ForgotPasswordForm from "../components/ForgotPassword";

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

const ForgotPassword = () => {
    const forgotPasswordHandler = (email) => {
        console.log(email)
    }
    return (
        <ForgotPasswordForm submitForm={(e) => forgotPasswordHandler(e)}/>
    );
};

export default ForgotPassword;
