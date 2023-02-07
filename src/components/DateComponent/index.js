import {DateInfo, DateTitle, DateWrapper} from "./styled";

const DateComponent = ({time, fullDate}) => {
  const timestamp = new Date(time * 1000);
  const day = new Intl.DateTimeFormat("en", {weekday: "long"}).format(timestamp);

  return (
    <DateWrapper>
      <DateTitle>Today is</DateTitle>
      <DateInfo>{day}</DateInfo>
      <DateInfo additional>
        Weather actual for
        <br/>{fullDate}
      </DateInfo>
    </DateWrapper>
  )
};

export default DateComponent;