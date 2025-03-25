import styled from "styled-components";

export const NameHeader = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0 0 35px 0;
    padding: 0;
    line-height: 1.0;
    color: ${({theme}) => theme.colors.header.headerName };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0 0 16px 0;
    }
`;

export const FooterEmail = styled.a`
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 24px;
    font-weight: 900;
    padding: 0;
    line-height: 1.0;
    text-decoration: none;
    color: ${({theme}) => theme.colors.header.headerName };
    transition: 0.3s;

    &:hover {
        color: ${({theme}) => theme.colors.link.hover };
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        margin: 4px 0 12px 0;
    }
`;