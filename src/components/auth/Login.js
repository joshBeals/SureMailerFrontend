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
                        Do not have an account? <a href="/register">Sign up</a>
                    </p>
                    <br />
                    <br />
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="with a placeholder"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password placeholder"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <AuthButton />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <GoogleButton />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h3 {
        font-weight: bold;
    }
`;

export default Login;
