import styled from "styled-components";

export const HireButton = styled.a`
    width: 154px;
    height: 49px;
    padding: 12px 16px;
    margin: 8px auto 0px 0px;
    /* margin-right: auto; */
    border: 1px;
    border-radius: 4px;
    color: white;
    background-color: ${({ theme }) => theme.colors.button.background};
    font-weight: 600;
    font-size: 20.06px;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.button.backgroundHover} ;
        }

    &:active {
        box-shadow: 0 -2px 2px rgba(20, 70, 32, 0.2);
    }
`;