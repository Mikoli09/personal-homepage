import { FooterParagraph } from "../../../common/Paragraph/styled";
import { StyledFooter } from "./styled";
import { Caption } from "../../../common/Caption/styled";
import { FooterEmail } from "../../../common/H1/styled";
import { Socials } from "./Socials";

export const Footer = () => (
    <StyledFooter id="contact">
        <Caption>Let’s talk!</Caption>
        <FooterEmail>osojca.marcin1@gmail.com</FooterEmail>
        <FooterParagraph>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me
        </FooterParagraph>
        <Socials />
    </StyledFooter>
);

