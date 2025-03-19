import { Project } from "../styled";
import { ProjectLink, Description, StyledH3, StyledLinkContainer } from "./styled";
import { LinkContainer } from "../LinkContainer";

export const ProjectItem = ({ project }) => {
    const { name, description, homepage, html_url } = project;

    return (
        <Project>
            <StyledH3>{name}</StyledH3>
            <Description>{description}</Description>
            <LinkContainer
                description={"Demo:"}
                href={homepage}
            />
            <LinkContainer
                description={"Code:"}
                href={html_url}
            />
        </Project>
    )
};

