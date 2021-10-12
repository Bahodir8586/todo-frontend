import React from 'react';
import ResetPasswordForm from "../../components/ResetPassword";

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

const ResetPassword = () => {
    const resetPasswordHandler = (password, passwordConfirm) => {
        console.log(password, passwordConfirm)
    }
    return (
        <ResetPasswordForm submitForm={(p, pc) => resetPasswordHandler(p, pc)}/>
    );
};

export default ResetPassword;
