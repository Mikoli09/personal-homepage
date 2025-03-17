import styled from "styled-components";

export const StyledHeader = styled.header`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    max-width: 1216px;
    margin: 100px 0;
    gap: 72px;
    background-color: ${({ theme }) => theme.mainHeader.background};
    z-index: 1;
    transition: 0.3s;

    @media(max-width:${({ theme }) => `${theme.breakpoints.mobile}px`}) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;