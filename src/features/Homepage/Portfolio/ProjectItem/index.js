import { Project } from "../styled";
import { Anchor, Description, StyledH3 } from "./styled";

export const ProjectItem = ({ projectProperties }) => (
    <Project>
        <StyledH3>{projectProperties.header}</StyledH3>
        <Description>{projectProperties.description}</Description>
        <Description>Demo: {projectProperties.demo}</Description>
        <Description>Code:
            <Anchor> {projectProperties.code}</Anchor>
        </Description>
    </Project>
);
