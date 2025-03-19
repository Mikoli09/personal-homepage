import { StyledLinkContainer } from "../ProjectItem/styled";
import { Description } from "../ProjectItem/styled";
import { ProjectLink } from "../ProjectItem/styled";

export const LinkContainer = ({href, description}) => {

    return (
        <StyledLinkContainer>
            <Description>{description}</Description>
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