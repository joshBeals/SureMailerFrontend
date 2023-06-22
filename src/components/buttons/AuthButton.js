import React from "react";
import styled from "styled-components";

const AuthButton = () => {
    return (
        <Wrapper>
            <p>Login with google</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    border-radius: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
        font-weight: 600;
        font-size: 1rem;
        margin: 0; padding: 0;
    }
`;

export default AuthButton;