import { LeadParagraph } from "../../../../common/Paragraph/styled";
import { LoadingWrapper, SpinnerSVG } from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";


export const Loading = () => (
    <LoadingWrapper>
        <PortfolioHeader />
        <LeadParagraph>Please wait, projects are being loaded...</LeadParagraph>
        <SpinnerSVG />
    </LoadingWrapper>
);