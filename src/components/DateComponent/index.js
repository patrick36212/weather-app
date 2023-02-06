import {DateInfo, DateTitle, DateWrapper} from "./styled";

const DateComponent = ({day, fullDate}) => (
  <DateWrapper>
    <DateTitle>Today is</DateTitle>
    <DateInfo>{day}</DateInfo>
    <DateInfo>{fullDate}</DateInfo>
  </DateWrapper>
);

export default DateComponent;