import styled from "styled-components";
import { Link } from "../../Footer/styled";

export const StyledH3 = styled.h3`
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: ${({ theme }) => theme.colors.header.h3};
`;

export const Description = styled.p`
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.9px;
    text-align: left;
    color: ${({ theme }) => theme.colors.paragraph.description};
`;

export const ProjectLink = styled(Link)`
    display: inline;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.anchor.text};
    text-decoration: underline ${({ theme }) => theme.colors.anchor.underline};
`;

export const StyledLinkContainer = styled(Description)`
    display: grid;
    align-items: baseline;
    grid-gap: 8px;
    grid-template-columns: auto 1fr;

`;