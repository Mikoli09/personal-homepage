import { LoadingSection } from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";
import { MainParagraph } from "../../../../common/Paragraph/styled";
import { DangerSVG, ErrorHeader } from "./styled";
import { GitHubButton } from "./styled";
import {ReactComponent as Danger} from "./../../../../assets/svg/danger.svg";

export const LoadingError = () => (
    <LoadingSection >
        <PortfolioHeader />
        <DangerSVG as={Danger} />
        <ErrorHeader>
            Ooops! Something went wrong...
        </ErrorHeader>
        <MainParagraph>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
        </MainParagraph>
        <GitHubButton
            href="https://github.com/Mikoli09?tab=repositories"
            title={"Mikoli09 repositories"}
            target="_blank"
            rel="noopener noreferrer"
        >
            Go to GitHub
        </GitHubButton>
    </LoadingSection >
);