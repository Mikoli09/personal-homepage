import styled from "styled-components";

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({theme}) => theme.paragraph.leadParagraph };
    letter-spacing: 1px;
    margin-top: 35px;
    margin-bottom: 32px;
`;

export const FooterParagraph = styled(LeadParagraph)`
    margin-top: 12px;
    margin-bottom: 26px;
    font-size: 18px;
    letter-spacing: 0.9px;
    max-width: 691px;  // to verify
    color: ${({theme}) => theme.paragraph.FooterParagraph };

`;