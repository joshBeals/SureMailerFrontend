import { useState, useEffect } from "react";
import styled from "styled-components";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

const AuthPage = () => {
    return (
        <Wrapper>
            <Container className="row">
                <LeftFlex className="col-xs-0 col-md-6 col-lg-4">
                    <Logo>SUREMAILER</Logo>
                    <Heading>
                        <h3 className="h3">
                            Start your <br /> journey with us.
                        </h3>
                        <p>
                            Discover the world's best community of freelancers
                            and business owners.
                        </p>
                    </Heading>
                    <Testimonials></Testimonials>
                </LeftFlex>
                <RightFlex className="col-xs-12 col-md-6 col-lg-8">
                    <Login />
                </RightFlex>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--background);
    padding: 2rem;
`;

const LeftFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--background-primary);
    border-radius: 1rem;
    padding: 2.5rem;
`;

const Logo = styled.h3`
    flex: 1;
    padding-top: 1rem;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    color: var(--text);
`;

const Heading = styled.div`
    flex: 2;
    h3 {
        font-size: 3rem;
        color: var(--text);
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.2rem;
        color: var(--text-secondary);
    }
`;

const Testimonials = styled.div`
    flex: 2;
    background: var(--background-primary-dark);
    border-radius: 1rem;
`;

const RightFlex = styled.div`
    h3 {
        font-weight: bold;
    }
`;

export default AuthPage;