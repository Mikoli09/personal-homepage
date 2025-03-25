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
    margin: 0;
    padding: 0;
    top: 0;
    right: 0; 
    cursor: pointer;
`;

export const ThemeLabel = styled(Caption)`
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
    top: 0;
    right: 0;
    cursor: pointer;
    border: 1px solid;
    border-radius: 20px;
    overflow: hidden;
    border-color: ${({ theme }) => theme.colors.buttonWrapper.toggle};;
`;

export const ToggleSVG = styled(Toggle)`
    position: absolute;
    transition: color 0.3s;
    color: ${({ theme }) => theme.colors.buttonWrapper.toggle};
    animation: ${({ $isDark }) => ($isDark ? moveRight : moveLeft)} 0.5s forwards;
`;

export const SunSVG = styled(Sun)`
    position: absolute;
    transition: color 0.3s;
    color: ${({ theme }) => theme.colors.buttonWrapper.sun};
    animation: ${({ $isDark }) => ($isDark ? moveRight : moveLeft)} 0.5s forwards;

`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;