import React, {useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

function Home () {

    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (! userData.user) history.push("/login")
    });

    return (
        <div className="page">
            <h1>Welcome to my Website!</h1>
        </div>
    )
}

export default Home ;