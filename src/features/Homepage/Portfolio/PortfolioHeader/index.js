import { StyledPortfolioHeader } from "./styled";
import { LeadParagraph } from "../../../../common/Paragraph/styled";
import { ReactComponent as GitHub } from '../../Footer/data/icons/Github_LM.svg';
import { StyleGitHub } from "../../Footer/styled";


export const PortfolioHeader = () => (
    <>
        <StyleGitHub as={GitHub} />
        <StyledPortfolioHeader>Portfolio</StyledPortfolioHeader>
        <LeadParagraph>My recent projects</LeadParagraph>
    </>
);
