import { HireButton } from "./HireButton/styled";
import { StyledHeaderContent } from "./styled";
import { Caption } from "../../../../common/Caption/styled";
import { HeaderName } from "../../../../common/H1/styled";
import { LeadParagraph } from "../../../../common/Paragraph/styled";

export const Profile = () => (
    <StyledHeaderContent>
        <Caption>THIS IS</Caption>
        <HeaderName>Marcin Osojca</HeaderName>
        <LeadParagraph>
            I am a passionate React developer with experience in building responsive and dynamic web applications.
        </LeadParagraph>
        <HireButton>Hire me</HireButton>
    </StyledHeaderContent>
);