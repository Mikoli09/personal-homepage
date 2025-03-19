import { LoadingWrapper } from "../styled";
import { PortfolioHeader } from "../PortfolioHeader";
import { LeadParagraph } from "../../../../common/Paragraph/styled";
import { StyledH3Error } from "./styled";
import { GitHubButton } from "./styled";

export const LoadingError = () => (
    < LoadingWrapper >
        <PortfolioHeader />
        <StyledH3Error>
            Ooops! Something went wrong...
        </StyledH3Error>
        <LeadParagraph>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
        </LeadParagraph>
        <GitHubButton
            href="https://github.com/Mikoli09?tab=repositories"
            title={"Mikoli09 repositories"}
            target="_blank"
            rel="noopener noreferrer"
        >
            Go to GitHub
        </GitHubButton>
    </LoadingWrapper >
);