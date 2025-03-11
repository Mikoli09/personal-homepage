import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme.colors.slateGray };
    margin-top: 38px;
    margin-bottom: 12px;
    padding-top: 10px;
`;

export const StyledH1 = styled.h1`
    font-size: 38px;
    font-weight: 900;
    line-height: 1.0;
    color: ${(props) => props.theme.colors.mineShaft };
`;

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.slateGray };
    letter-spacing: 1px;
    margin-top: 35px;
    margin-bottom: 32px;
`;