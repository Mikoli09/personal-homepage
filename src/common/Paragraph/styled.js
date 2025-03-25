import styled from "styled-components";

export const MainParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({theme}) => theme.colors.paragraph.leadParagraph };
    letter-spacing: 1px;
    margin-top: 0;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;

export const FooterParagraph = styled(MainParagraph)`
    margin-top: 0;
    margin-bottom: 56px;
    font-size: 18px;
    letter-spacing: 0.9px;
    max-width: 691px;  // to verify
    color: ${({theme}) => theme.colors.paragraph.FooterParagraph };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
        margin-bottom: 40px;
    }
`;