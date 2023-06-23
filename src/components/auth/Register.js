import { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import { Col, Form, Row } from "reactstrap";
import styled from "styled-components";
import AuthButton from "../buttons/AuthButton";
import MyInput from "../form/Input";

const Register = () => {
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
                    <Form>
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
                                <AuthButton type="REGISTER" />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            <Social>
                <Row>
                    <Col md={12}>
                        <GoogleButton label="Sign up with Google" />
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

export default Register;
