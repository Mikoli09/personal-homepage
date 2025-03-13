import styled from "styled-components";

export const PortfolioSection = styled.section`
    background-color: ${({ theme }) => theme.section.portfolio.background} ;
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
    background-color: ${({ theme }) => theme.list.background};
`;

export const PortfolioHeader = styled.header`
    text-align: center;
    font-size: 30px;
    padding: 20px 0;
    color: ${({ theme }) => theme.header.text};
`;

export const Project = styled.li`
    list-style: none;
    padding: 56px;
    border: 6px solid;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.list.item.border};
    background-color: ${({ theme }) => theme.list.item.background};
`;

