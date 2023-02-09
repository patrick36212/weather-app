import {EmojiFrown} from "@styled-icons/bootstrap/EmojiFrown";
import styled, {keyframes} from "styled-components";

const resize = keyframes`
  0% {
    transform: scale(1.0);
  }
  90%{
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
`;
export const ErrorIcon = styled(EmojiFrown)`
  width: 80px;
  animation: ${resize} .6s ease-out;
`;