import { useState, useEffect } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import styled from "styled-components";
import GoogleButton from 'react-google-button';
import AuthButton from "../buttons/AuthButton";

const Login = () => {
    return (
        <Wrapper>
            <Row className="d-flex justify-content-center">
                <Col className="col-xs-10 col-md-8 pt-5">
                    <h3>Sign in</h3>
                    <p style={{ fontWeight: 600 }}>
                        Do not have an account? <a href="/auth/register">Sign up</a>
                    </p>
                    <br />
                    <br />
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="Email">Email</Label>
                                    <Input
                                        id="Email"
                                        name="email"
                                        placeholder=""
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="Password">Password</Label>
                                    <Input
                                        id="Password"
                                        name="password"
                                        placeholder=""
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <AuthButton type="LOGIN" />
                            </Col>
                        </Row>
                    </Form>
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
