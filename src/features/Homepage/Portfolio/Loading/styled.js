import styled, {keyframes} from "styled-components";
import { ReactComponent as Spinner } from '../../../../assets/svg/icon-spinner.svg';

const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;

export const SpinnerSVG = styled(Spinner)`
  animation: ${rotation} 1s linear normal infinite ;
`;
