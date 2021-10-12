import React from 'react';
import {useRouter} from "next/router";
import ResetPasswordForm from "../../components/ResetPassword";
import axios from "../../components/axios";

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

const ResetPassword = () => {
    const router = useRouter()
    // const [errorMessage, setErrorMessage] = useState("")
    const resetPasswordHandler = (password, passwordConfirm) => {
        const token = router.asPath.split("/")[2];
        console.log(token, password, passwordConfirm)
        axios.patch(`/users/resetPassword/${token}`, {password, passwordConfirm}).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)

        })
    }
    return (
        <ResetPasswordForm submitForm={(p, pc) => resetPasswordHandler(p, pc)}/>
    );
};

export default ResetPassword;
