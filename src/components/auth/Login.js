import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, Row } from "reactstrap";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import AuthButton from "../buttons/AuthButton";
import MyInput from "../form/Input";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);
    const [apiData, setApiData] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const methods = useForm();

    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/login`;
    const headers = {
        "Content-Type": "application/json",
    };

    const fetchData = async (data) => {
        setIsLoading(true);
        try {
            axios
                .post(url, data, { headers })
                .then((response) => {
                    console.log(response?.data);
                    setApiData(response?.data);
                    setIsLoading(false);
                    toast.success("Login Successful!", {
                        toastId: 'success',
                    });
                    dispatch(setUser(response?.data));
                    localStorage.setItem("token", response?.data?.token);
                    navigate("/dashboard");
                })
                .catch((error) => {
                    console.error(error?.response?.data);
                    setServerError(error?.response?.data);
                    setIsLoading(false);
                    toast.error(error?.response?.data?.error, {
                        toastId: 'failure',
                    });
                });
        } catch (error) {
            setServerError(error);
            setIsLoading(false);
            toast.error("Something went wrong!", {
                toastId: 'failure',
            });
        }
    };

    const onSubmit = methods.handleSubmit((data) => {
        fetchData(data);
    });

    const googleAuth = () => {
        window.location.replace(`${process.env.REACT_APP_BACKEND_URL}/auth/google`);
    };

    return (
        <Wrapper>
            <Row className="d-flex justify-content-center">
                <Col className="col-xs-10 col-md-8 pt-5">
                    <h3>Sign in</h3>
                    <p style={{ fontWeight: 600 }}>
                        Do not have an account?{" "}
                        <a href="/auth/register">Sign up</a>
                    </p>
                    <br />
                    <br />
                    <FormProvider {...methods}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Row>
                                <Col md={12}>
                                    <MyInput
                                        label="Email"
                                        id="email"
                                        name="email"
                                        placeholder=""
                                        type="email"
                                    />
                                </Col>
                                <Col md={12}>
                                    <MyInput
                                        label="Password"
                                        id="password"
                                        name="password"
                                        placeholder=""
                                        type="password"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <AuthButton
                                        loading={isLoading}
                                        action={onSubmit}
                                        type="LOGIN"
                                    />
                                </Col>
                            </Row>
                        </form>
                    </FormProvider>
                </Col>
            </Row>
            <Social>
                <Row>
                    <Col md={12}>
                        <GoogleButton onClick={googleAuth} />
                    </Col>
                </Row>
            </Social>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
    h3 {
        font-weight: bold;
    }
`;

const Social = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;

export default Login;
