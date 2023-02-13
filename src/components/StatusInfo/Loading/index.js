import { StatusParagraph, StatusTitle, StatusWrapper } from "../styled";
import { LoaderIcon } from "./styled";

const Loading = () => (
  <StatusWrapper>
    <StatusTitle>Checking weather</StatusTitle>
    <StatusParagraph>Please wait...</StatusParagraph>
    <LoaderIcon />
  </StatusWrapper>
);

export default Loading;