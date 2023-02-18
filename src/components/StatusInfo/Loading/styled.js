import { Sun } from "@styled-icons/bootstrap/Sun";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoaderIcon = styled(Sun)`
  width: 22vw;
  height: 22vw;
  animation: ${rotation} 5s linear infinite;
`;
