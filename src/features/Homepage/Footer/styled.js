import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    text-align: left;
`;

export const SocialsList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin: 12px 0;
    padding: 12px 0;
    list-style: none;
`;

export const SocialsItem = styled.li`
    cursor: pointer;
`;

export const Link = styled.a`
    color: black;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ;

    @media (max-width: 800px) {
        width: 32px;
    }

    &:hover {
        color: #0366D6;
    }
`;

export const StyleIcon = Icon => styled(Icon)`
    height: auto;

    @media (max-width: 800px) {
        width: 32px;
    }
`;
