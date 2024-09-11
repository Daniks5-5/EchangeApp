import React from "react";
import { Navigate} from "react-router-dom";

function HomePages(){
    return(
       
        <div>
             <Navigate to='/login' />
            <h1>HomePages</h1>
        </div>
    );
}

export default HomePages;