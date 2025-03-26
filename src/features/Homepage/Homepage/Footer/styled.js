import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 56px 36px 0;
    text-align: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 32px 16px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 32px 16px 0;
    }
`;