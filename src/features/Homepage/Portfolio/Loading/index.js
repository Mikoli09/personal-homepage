import { LoadingWrapper, SpinnerSVG } from "../styled";


export const Loading = () => {

    return (
        <LoadingWrapper>
            <p>Please wait, projects are being loaded...</p>
            <SpinnerSVG />
        </LoadingWrapper>
    )
};