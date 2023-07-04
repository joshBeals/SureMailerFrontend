import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoogleFailure = () => {

    const navigate = useNavigate();

    useEffect(() => {
        toast.error("Authentication Failed!", {
            toastId: 'failure',
        });
        navigate("/auth/login");
    });

    return <div></div>
}

export default GoogleFailure;