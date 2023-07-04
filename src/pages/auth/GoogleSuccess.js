import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../../redux/reducers/userReducer";
import axios from "axios";

const GoogleSuccess = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token");

    console.log(token);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    useEffect(() => {
        setIsLoading(true);
        try {
            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/user`, { headers })
                .then((response) => {
                    setIsLoading(false);
                    toast.success("Authentication Successful!", {
                        toastId: 'success',
                    });
                    dispatch(setUser({ token: token, user: response?.data?.user }));
                    localStorage.setItem("token", token);
                    navigate("/dashboard");
                })
                .catch((error) => {
                    setIsLoading(false);
                    toast.error(error?.response?.data?.error, {
                        toastId: 'failure',
                    });
                    navigate("/auth/login");
                });
        } catch (error) {
            setIsLoading(false);
            toast.error("Something went wrong!", {
                toastId: 'failure',
            });
            navigate("/auth/login");
        }
    }, [token]);

    return <div></div>
}

export default GoogleSuccess;