import { StyledThemeButton, ToggleSVG, BrightnessSVG, ButtonWrapper } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../homepageSlice";
import { selectThemeDark } from "../../../homepageSlice";

export const ThemeButton = () => {
    const darkActive = useSelector(selectThemeDark);

    return (
        <StyledThemeButton>
            <ButtonWrapper>
                <ToggleSVG
                    $isDark={darkActive}
                >
                </ToggleSVG>
                <BrightnessSVG
                    $isDark={darkActive}
                >
                </BrightnessSVG>
            </ButtonWrapper>
        </StyledThemeButton>
    )
};