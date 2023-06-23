import React from "react";
import styled from "styled-components";

const AuthButton = ({ type, action }) => {
    return (
        <Wrapper onClick={action}>
            <p>{type}</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background: var(--background-primary);
    border-radius: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 300ms ease-in-out;

    p {
        font-weight: 600;
        font-size: 1rem;
        margin: 0; padding: 0;
        color: var(--text);
    }

    &:hover {
        // transform: scale(1.02);
        background: var(--background-primary-dark);
    }
`;

export default AuthButton;