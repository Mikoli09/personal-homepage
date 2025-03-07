import { HeaderContent } from "./HeaderContent";
import { ProfilePicture } from "./ProfilePicture/styled";
import { StyledHeader } from "./styled";

export const HeaderContainer = () => {

    return (
        <StyledHeader>
            <ProfilePicture src={`${process.env.PUBLIC_URL}/assets/Marcin.jpg`} alt="Marcin" />
            <HeaderContent></HeaderContent>
        </StyledHeader>
    )
};