import { StyledThemeButton, ToggleSVG, SunSVG, ButtonWrapper } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../homepageSlice";
import { selectThemeDark } from "../../../homepageSlice";

export const ThemeButton = () => {
    const darkThemeActive = useSelector(selectThemeDark);

    return (
        <StyledThemeButton>
            <ButtonWrapper>
                <ToggleSVG $isDark={darkThemeActive} />
                <SunSVG $isDark={darkThemeActive} />
            </ButtonWrapper>
        </StyledThemeButton>
    )
};