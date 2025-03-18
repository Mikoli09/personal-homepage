import { Profile } from "./Profile";
import { Picture } from "./Picture/styled";
import { StyledHeader } from "./styled";
import { useDispatch } from "react-redux";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const HeaderContainer = () => {
    // dodaj picture source w ProfilePicture
    const dispatch = useDispatch();

    return (
        <StyledHeader>
            <Picture src={`${process.env.PUBLIC_URL}/assets/Marcin.jpg`} alt="Marcin" />
            <ThemeSwitcher />
            <Profile />
        </StyledHeader>
    )
};