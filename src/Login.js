import React from 'react';
import "./Login.css";
import logo from "./logo.webp";
import { Button } from '@material-ui/core';
import { auth, provider} from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn =() => {
        auth
        .signInWithPopup(provider)
        .then((result)=> {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="logo" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="fblogo" />
            </div>
            <Button type="submit" onClick={signIn}> Sign In</Button>
        </div>
    )
}

export default Login;
