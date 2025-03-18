import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from './Loading/icon-spinner.svg'

const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;

export const PortfolioSection = styled.section`
    background-color: ${({ theme }) => theme.section.portfolio.background} ;
    padding: 0;
    margin: 0;
`;

export const LoadingWrapper = styled(PortfolioSection)`
    background-color: ${({ theme }) => theme.section.portfolio.background} ;
    padding: 0;
    margin: 0;
    text-align: center;
`;

export const SpinnerSVG = styled(Spinner)`
  animation: ${rotation} 1s linear normal infinite ;

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

export const Project = styled.li`
    list-style: none;
    padding: 56px;
    border: 6px solid;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.list.item.border};
    background-color: ${({ theme }) => theme.list.item.background};
`;
