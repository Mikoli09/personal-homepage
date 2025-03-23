import styled from "styled-components";
import { ReactComponent as Marker } from './marker.svg'

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 8px 115px;
    padding: 32px 0px;
    margin:0;
    list-style: none;
    text-align: left;
    line-height: 1.4;
    letter-spacing: 0.9px;
    color: ${({ theme }) => theme.colors.list.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    display: flex;
    /* gap: 16px; */
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    padding-left: 0px;
`;

export const MarkerPic = styled(Marker)`
    margin-right: 16px;
    fill: ${({ theme }) => theme.colors.marker.fill};
    /* display: inline-block; */
    /* flex-shrink: 0; */
`;

