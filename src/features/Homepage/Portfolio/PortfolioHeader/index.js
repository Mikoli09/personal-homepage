import { PortfolioHeaderText } from "./styled";
import { LeadParagraph } from "../../../../common/Paragraph/styled";
import { ReactComponent as GitHub } from '../../Footer/data/icons/Github_LM.svg';
import { StyleGitHub } from "../../Footer/styled";
import { PortfolioHeaderContainer } from "./styled";


export const PortfolioHeader = () => (
    <PortfolioHeaderContainer>
        <StyleGitHub as={GitHub} />
        <PortfolioHeaderText>Portfolio</PortfolioHeaderText>
        <LeadParagraph>My recent projects</LeadParagraph>
    </PortfolioHeaderContainer>
);
