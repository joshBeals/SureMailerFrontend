import { useState, useEffect } from "react";
import styled from "styled-components";

const LoginPage = () => {
    return (
        <Wrapper>
            <Container>
                <LeftFlex>

                </LeftFlex>
                <RightFlex>
                    
                </RightFlex>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%; height: 100vh;
    background: var(--background-secondary);
    // padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--background);
    padding: 2rem;
    // border-radius: 1rem;
    display: flex;
`;

const LeftFlex = styled.div`
    flex: 1;
    background: var(--background-primary);
    border-radius: 1rem;
`;

const RightFlex = styled.div`
    flex: 2;
`;

export default LoginPage;