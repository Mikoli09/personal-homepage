import styled from "styled-components";

export const HireButton = styled.button`
    width: 154px;
    height: 49px;
    padding: 12px 16px;
    margin: 10px;
    margin-right: auto;
    border: 1px;
    border-radius: 4px;
    color: white;
    background-color: ${({theme}) => theme.colors.scienceBlue };
    font-weight: 600;
    font-size: 20.06px;
`;