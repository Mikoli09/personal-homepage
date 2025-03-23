import { StyledLinkContainer } from "../ProjectItem/styled";
import { ProjectDescription } from "../ProjectItem/styled";
import { ProjectLink } from "../ProjectItem/styled";

export const LinkContainer = ({href, description}) => {

    return (
        <StyledLinkContainer>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectLink
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {href}
            </ProjectLink>
        </StyledLinkContainer>
    )
};