import styled from "styled-components";

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.caption.text};
    margin-top: 38px;
    margin-bottom: 12px;
    /* padding-top: 10px; */
    text-transform: uppercase;
`;
