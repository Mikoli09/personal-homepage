import styled from "styled-components";
import {ReactComponent as Marker} from './marker.svg'

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    padding: 32px 0px;
    margin:0;
    list-style: none;
    text-align: left;
    line-height: 1.4;
    letter-spacing: 0.9px;
    color: ${({ theme }) => theme.colors.slateGray};
`;

export const ListItem = styled.li`
    display: flex;
    /* gap: 16px; */
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    padding-left: 32px;
`;

export const MarkerPic = styled(Marker)`
    margin-right: 16px;
    /* display: inline-block; */
    /* flex-shrink: 0; */
`;

