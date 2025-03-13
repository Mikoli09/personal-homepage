import { Profile } from "./HeaderContent";
import { ThemeButton } from "./Theme/styled";
import { ProfilePicture } from "./ProfilePicture/styled";
import { StyledHeader } from "./styled";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../homepageSlice";


export const HeaderContainer = () => {
    // dodaj picture source w ProfilePicture
    const dispatch = useDispatch();

    return (
        <StyledHeader>
            <ProfilePicture src={`${process.env.PUBLIC_URL}/assets/Marcin.jpg`} alt="Marcin" />
            <ThemeButton
                onClick={() => dispatch(toggleTheme())}
            >
                Theme button
            </ThemeButton>
            <Profile />
        </StyledHeader>
    )
};