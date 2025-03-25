import { EnvelopeSVG, HireButton } from "./HireButton/styled";
import { ProfileContainer } from "./styled";
import { Caption } from "../../../../common/Caption/styled";
import { NameHeader } from "../../../../common/H1/styled";
import { MainParagraph } from "../../../../common/Paragraph/styled";

export const Profile = () => (
    <ProfileContainer>
        <Caption>THIS IS</Caption>
        <NameHeader>Marcin Osojca</NameHeader>
        <MainParagraph>
            I am a passionate React developer with experience in building responsive and dynamic web applications.
        </MainParagraph>
        <HireButton href="#contact">
            <EnvelopeSVG />
            Hire me
        </HireButton>
    </ProfileContainer>
);