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
        💻⚙️ I'm a React Developer with a background as an Automation Engineer, bringing problem-solving skills to frontend development. Ready to grow and contribute in a dynamic team!
        </MainParagraph>
        <HireButton href="#contact">
            <EnvelopeSVG />
            Hire me
        </HireButton>
    </ProfileContainer>
);