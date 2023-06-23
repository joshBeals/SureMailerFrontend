import { useState, useEffect } from "react";
import { Col, Input, Row } from "reactstrap";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import AuthButton from "../buttons/AuthButton";
import MyInput from "../form/Input";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";

const Login = () => {
    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        console.log(data);
    });

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
                        <GoogleButton />
                    </Col>
                </Row>
            </Social>
        </Wrapper>
    );
};

const Wrapper = styled.div`
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
