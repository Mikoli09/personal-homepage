import styled from "styled-components";

export const PortfolioSection = styled.section`
    padding: 0;
    margin: 0;
`;

export const PortfolioList = styled.ul`
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const PortfolioHeader = styled.header`
    text-align: center;
    font-size: 30px;
    padding: 20px 0;
`;

export const Project = styled.li`
    list-style: none;
    padding: 56px;
    border: 6px solid;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.colors.iron};
    background-color: ${({ theme }) => theme.colors.white};
`;

