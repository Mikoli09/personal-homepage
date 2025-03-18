import styled, { keyframes } from "styled-components";
import { Caption } from "../../../../common/Caption/styled";
import { ReactComponent as Toggle } from './toggle.svg'
import { ReactComponent as Sun } from './sun.svg'

const moveRight = keyframes`
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(10px);
  }
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
`;

export const SwitcherContainer = styled.div`
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    top: 0px;
    right: 0px; 

    margin: 0px;
    padding: 0px;
    cursor: pointer;
`;

export const ModeLabel = styled(Caption)`
    margin-top: 0;
    margin-bottom: 0;
    z-index: 2;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      display: none;
    }
`;

export const StyledThemeButton = styled.button`
    position: relative;
    width: 48px;
    height: 26px;
    display: flex;
    align-items:center;
    justify-content: center;
    z-index: 2;
    padding: 0;
    margin: 0;

    top: 0px;
    right: 0px; 

    border: 1px solid;
    border-color: ${({ theme }) => theme.buttonWrapper.toggle};;
    border-radius: 20px;

    cursor: pointer;
    overflow: hidden;

`;

export const ToggleSVG = styled(Toggle)`
    position: absolute;
    transition: color 0.3s;
    color: ${({ theme }) => theme.buttonWrapper.toggle};
    animation: ${({ $isDark }) => ($isDark ? moveRight : moveLeft)} 0.5s forwards;
`;

export const SunSVG = styled(Sun)`
    position: absolute;
    transition: color 0.3s;
    color: ${({ theme }) => theme.buttonWrapper.sun};
    animation: ${({ $isDark }) => ($isDark ? moveRight : moveLeft)} 0.5s forwards;

`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;



`;