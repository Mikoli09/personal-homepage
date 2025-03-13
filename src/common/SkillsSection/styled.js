import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1216px;
    text-align: center;
    margin: 36px auto;
    padding: 0px 32px; 
    background-color: ${({theme}) => theme.section.background };
    transition: 0.3s;
`;

export const SectionHeader = styled.h2`
    color: ${({theme}) => theme.header.text } ;
    padding: 32px 32px 12px 0px;
    margin: 0px;
    text-align: left;
    font-size: 30px;
    font-weight: 900;
    border-bottom: solid 1px;
    border-color: ${({theme}) => theme.header.border } ;
`;

