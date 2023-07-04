import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!token || !user) {
            navigate("/auth/login");
        }
    }, [token, user]);

    // const url = "http://localhost:5000/user";
    // const headers = {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`,
    // };

    return <div>Dashboard</div>;
};

export default Dashboard;
