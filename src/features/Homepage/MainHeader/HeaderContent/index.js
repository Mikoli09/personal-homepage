import { HireButton } from "./HireButton/styled";
import { Info } from "./Info";
import { StyledHeaderContent } from "./styled";
import { ThemeButton } from "./ThemeButton/styled";


export const HeaderContent = () => {

    return (
        <StyledHeaderContent>
            <ThemeButton>Theme button</ThemeButton>
            <Info />
            <HireButton>Hire me</HireButton>
        </StyledHeaderContent>
    )
};