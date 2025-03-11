import { HeaderContent } from "./HeaderContent";
import { ThemeButton } from "./HeaderContent/ThemeButton/styled";
import { ProfilePicture } from "./ProfilePicture/styled";
import { StyledHeader } from "./styled";

export const HeaderContainer = () => {

    // dodaj picture source w ProfilePicture
    return (
        <StyledHeader>
            <ProfilePicture src={`${process.env.PUBLIC_URL}/assets/Marcin.jpg`} alt="Marcin" />
            <HeaderContent />
        </StyledHeader>
    )
};