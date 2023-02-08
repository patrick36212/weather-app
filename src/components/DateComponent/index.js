import {DateInfo, DateTitle, DateWrapper} from "./styled";

const DateComponent = () => {
  const timestamp = new Date();
  const day = new Intl.DateTimeFormat("en", {weekday: "long"}).format(timestamp);
  const fullDate = timestamp.toLocaleDateString();

  return (
    <DateWrapper>
      <DateTitle>Today is</DateTitle>
      <DateInfo>{day}</DateInfo>
      <DateInfo additional>
        {fullDate}
      </DateInfo>
    </DateWrapper>
  )
};

export default DateComponent;