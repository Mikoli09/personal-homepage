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

export const SocialsList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
`;

export const SocialsItem = styled.li`
    cursor: pointer;
`;

export const StyleGitHub = styled.svg`
    height: auto;
    color: ${({ theme }) => theme.colors.link.hover};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }
`;

export const Link = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ;
    color: ${({ theme }) => theme.colors.link.icon};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }

    &:hover {
        color: #0366D6;
    }
`;

export const StyleIcon = Icon => styled(Icon)`
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 32px;
    }
`;
