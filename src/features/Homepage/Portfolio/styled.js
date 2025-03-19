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
    background-color: ${({ theme }) => theme.colors.section.portfolio.background} ;
    padding: 0;
    margin: 0;
    text-align: center;
`;

export const LoadingWrapper = styled(PortfolioSection)`
    background-color: ${({ theme }) => theme.colors.section.portfolio.background} ;
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
    background-color: ${({ theme }) => theme.colors.list.background};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
  }
`;

export const Project = styled.li`
    list-style: none;
    padding: 56px;
    border: 6px solid;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.colors.list.item.border};
    background-color: ${({ theme }) => theme.colors.list.item.background};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        max-width: 100%;
  }
`;
