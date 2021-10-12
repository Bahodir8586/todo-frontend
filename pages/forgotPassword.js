import React from 'react';

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
    return (
        <div>

        </div>
    );
};

export default ForgotPassword;
