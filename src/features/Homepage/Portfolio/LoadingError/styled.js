import styled from "styled-components";
import { StyledH3 } from "../ProjectItem/styled";
import { HireButton } from "../../MainHeader/Profile/HireButton/styled";

export const StyledH3Error = styled(StyledH3)`
    text-align: center;
    color: ${({ theme }) => theme.colors.header.text};
`;

export const GitHubButton = styled(HireButton)`
    

`;