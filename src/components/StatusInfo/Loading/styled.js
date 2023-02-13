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
  width: 100px;
  animation: ${rotation} 5s linear infinite;
`;