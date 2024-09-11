import React from "react";
import { Link } from "react-router-dom";

function LoginPages(){
    return(
        <div>
            <h1>LoginPages</h1>

            <p>
                Or <Link to='/register'> регистрация </Link>
            </p>
        </div>
    );
}

export default LoginPages;