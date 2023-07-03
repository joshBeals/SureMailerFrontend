import React from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";

const AuthButton = ({ loading, type, action }) => {
    return (
        <Wrapper>
            <button disabled={loading} onClick={action}>
                {loading ? <Spinner color="white">Loading...</Spinner> : <p>{type}</p>}
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    background: var(--background-primary);
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 300ms ease-in-out;

    button {
        width: 100%;
        padding: 1rem;
        background: rgba(0, 0, 0, 0);
        border-radius: 0.3rem;
        border: none;
    }

    p {
        font-weight: 600;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        color: var(--text);
    }

    &:hover {
        // transform: scale(1.02);
        background: var(--background-primary-dark);
    }
`;

export default AuthButton;