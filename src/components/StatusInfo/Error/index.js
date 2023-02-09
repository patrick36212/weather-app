import {StatusParagraph, StatusTitle, StatusWrapper} from "../styled";
import {ErrorIcon} from "./styled";

const Error = () => (
  <StatusWrapper>
    <StatusTitle>Oh no!</StatusTitle>
    <StatusParagraph error="true">Something went wrong</StatusParagraph>
    <ErrorIcon/>
    <StatusParagraph error="true">We can't check weather for you. Sorry...</StatusParagraph>
  </StatusWrapper>
);

export default Error;