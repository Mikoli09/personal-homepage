import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1216px;
    margin: 100px 0;
    gap: 72px;
    background-color: ${({theme}) => theme.colors.white };
`;