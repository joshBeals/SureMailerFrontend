import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleButton from "react-google-button";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import AuthButton from "../buttons/AuthButton";
import MyInput from "../form/Input";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);
    const [apiData, setApiData] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const methods = useForm();

    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/register`;
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
                    toast.success("Registration Successful!", {
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
                    <h3>Sign up</h3>
                    <p style={{ fontWeight: 600 }}>
                        Already have an account?{" "}
                        <a href="/auth/login">Sign in</a>
                    </p>
                    <br />
                    <br />
                    <FormProvider {...methods}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Row>
                                <Col md={12}>
                                    <MyInput
                                        label="First Name"
                                        id="firstname"
                                        name="firstname"
                                        placeholder=""
                                        type="text"
                                    />
                                </Col>
                                <Col md={12}>
                                    <MyInput
                                        label="Last Name"
                                        id="lastname"
                                        name="lastname"
                                        placeholder=""
                                        type="text"
                                    />
                                </Col>
                            </Row>
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
                                        type="REGISTER"
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
                        <GoogleButton onClick={googleAuth} label="Sign up with Google" />
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

export default Register;
