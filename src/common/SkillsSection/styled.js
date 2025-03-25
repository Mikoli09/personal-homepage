import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1216px;
    text-align: center;
    margin: 72px 36px;
    padding: 0px 32px; 
    background-color: ${({theme}) => theme.colors.section.background };
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 48px 14px;
        padding: 0 16px; 
    }
`;

export const SectionHeader = styled.h2`
    color: ${({theme}) => theme.colors.header.text } ;
    padding: 32px 32px 12px 0px;
    margin: 0px;
    text-align: left;
    font-size: 30px;
    font-weight: 900;
    border-bottom: solid 1px;
    border-color: ${({theme}) => theme.colors.header.border } ;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        margin: 0;
        padding: 16px 0 12px 0;
    }
`;