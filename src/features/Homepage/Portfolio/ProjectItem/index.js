import { Project } from "../styled";
import { Anchor, Description, StyledH3 } from "./styled";

export const ProjectItem = ({ projectProperties }) => (
    <Project>
        <StyledH3>{projectProperties.name}</StyledH3>
        <Description>{projectProperties.description}</Description>
        <Description>Demo: {projectProperties.homepage}</Description>
        <Description>Code:
            <Anchor> {projectProperties.html_url}</Anchor>
        </Description>
    </Project>
);
