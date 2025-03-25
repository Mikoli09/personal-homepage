import { MainParagraph } from "../../../../common/Paragraph/styled";
import { LoadingSection, SpinnerSVG } from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";

export const Loading = () => (
    <LoadingSection>
        <PortfolioHeader />
        <MainParagraph>Please wait, projects are being loaded...</MainParagraph>
        <SpinnerSVG />
    </LoadingSection>
);