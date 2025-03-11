import { SectionHeader, StyledSection } from "./styled"

export const SkillsSection = ({ headerContent, sectionContent }) => (
    <StyledSection>
        <SectionHeader>
            {headerContent}
        </SectionHeader>
        {sectionContent}
    </StyledSection>
);
