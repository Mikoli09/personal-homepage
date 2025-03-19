import styled from "styled-components";

export const HeaderName = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 0;
    line-height: 1.0;
    color: ${({theme}) => theme.colors.header.headerName };
`;

export const FooterEmail = styled(HeaderName)`
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 12px;
`;