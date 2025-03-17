import { useDispatch, useSelector } from "react-redux";
import { StyledThemeButton, SwitcherContainer, ModeLabel, ToggleSVG } from "./styled";
import { toggleTheme } from "../../../../homepageSlice";
import { ThemeButton } from "./ThemeButton";
import { selectThemeDark } from "../../../../homepageSlice";



export const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectThemeDark);

    return (
        <SwitcherContainer onClick={() => dispatch(toggleTheme())}>
            <ModeLabel>
                Dark mode {isDark ? "on" : "off"}</ModeLabel>
            <ThemeButton />
        </SwitcherContainer>
    )
};