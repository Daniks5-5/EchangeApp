import React from "react";
import { Link } from 'react-router-dom';

function RegisterPages(){
    return(
        <div>
            <h1>RegisterPages</h1>

            <p>
                У вас есть аккаунт? <Link to='/login'> Войти </Link> 
            </p>
        </div>
    );
}
export default RegisterPages;