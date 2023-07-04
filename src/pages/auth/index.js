import { useState, useEffect } from "react";
import styled from "styled-components";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

const AuthPage = () => {

    const [auth, setAuth] = useState('');

    const path = window.location.pathname.split("/").slice(-1)[0];

    useEffect(() => {
        if (path === 'register') {
            setAuth('register');
        } else {
            setAuth('login');
        }
    },[]);

    return (
        <Wrapper>
            <Container className="row">
                <LeftFlex className="col-xs-0 col-md-6 col-lg-6">
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
                <RightFlex className="col-xs-12 col-md-6 col-lg-6">
                    { auth === 'register' ? <Register /> : <Login />}
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
`;

const LeftFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--background-primary);
    padding: 2.5rem;

    @media (max-width: 768px) {
        display: none;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        font-weight: bold;
    }
    
    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export default AuthPage;