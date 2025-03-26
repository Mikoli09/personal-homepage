import styled from "styled-components";
import { Link } from "../../../Footer/Socials/styled";
import { Description } from "../ProjectItem/styled";

export const ProjectDescription = styled(Description)`
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const ProjectLink = styled(Link)`
    display: inline;
    word-break: break-all;
    color: ${({ theme }) => theme.colors.anchor.text};
    text-decoration: underline ${({ theme }) => theme.colors.anchor.underline};
    width: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const StyledLinkContainer = styled.div`
    display: grid;
    align-items: baseline;
    grid-gap: 8px;
    grid-template-columns: auto 1fr;
    margin-top: 8px;
    margin-bottom: 0;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.9px;
    text-align: left;
    color: ${({ theme }) => theme.colors.paragraph.description};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;