import {DateInfo, DateTitle, DateWrapper} from "./styled";

const DateComponent = () => {

  const now = new Date();
  const day = new Intl.DateTimeFormat("en", {weekday: "long"}).format(now);
  const fullDate = now.toLocaleDateString();

  return (
    <DateWrapper>
      <DateTitle>Today is</DateTitle>
      <DateInfo>{day}</DateInfo>
      <DateInfo>{fullDate}</DateInfo>
    </DateWrapper>
  )
}

export default DateComponent;