import { useState, useEffect } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import styled from "styled-components";

const Register = () => {
    return (
        <Wrapper>
            <Row className="d-flex justify-content-center">
                <Col className="col-xs-10 col-md-8 pt-5">
                    <h3>Sign up</h3>
                    <p style={{ fontWeight: 600 }}>
                        Already have an account? <a href="/register">Sign in</a>
                    </p>
                    <br />
                    <br />
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstname">First Name</Label>
                                    <Input
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
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
                            <Col md={6}>
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

export default Register;
