import { FooterParagraph } from "../../../common/Paragraph/styled";
import { Socials, StyledFooter } from "./styled";
import { Caption } from "../../../common/Caption/styled";
import { FooterEmail } from "../../../common/H1/styled";

export const Footer = () => (
    <StyledFooter>
        <Caption>Let’s talk!</Caption>
        <FooterEmail>osojca.marcin1@gmail.com</FooterEmail>
        <FooterParagraph>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me
        </FooterParagraph>
        <Socials>🔗✉️</Socials>
    </StyledFooter>

);

