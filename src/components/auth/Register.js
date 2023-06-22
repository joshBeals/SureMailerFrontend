import { useState, useEffect } from "react";
import GoogleButton from "react-google-button";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import styled from "styled-components";
import AuthButton from "../buttons/AuthButton";

const Register = () => {
    return (
        <Wrapper>
            <Row className="d-flex justify-content-center">
                <Col className="col-xs-10 col-md-8 pt-5">
                    <h3>Sign up</h3>
                    <p style={{ fontWeight: 600 }}>
                        Already have an account? <a href="/auth/login">Sign in</a>
                    </p>
                    <br />
                    <br />
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="firstname">First Name</Label>
                                    <Input
                                        id="firstname"
                                        name="firstname"
                                        placeholder=""
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        placeholder=""
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
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
                                    <Label for="Password">
                                        Password
                                    </Label>
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
                                <AuthButton type="REGISTER" />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            
            <Social>
                <Row>
                    <Col md={12}>
                        <GoogleButton label='Sign up with Google' />
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
