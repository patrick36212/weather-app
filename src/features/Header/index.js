import {HeaderDay, HeaderInfo, HeaderInfoWrapper, HeaderWrapper} from "./styled";
import {useEffect, useState} from "react";
import Search from "./Search";

const Header = () => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const day = new Intl.DateTimeFormat("en", {weekday: "long"}).format(date);

  return(
    <HeaderWrapper>
      <HeaderInfoWrapper>
        <HeaderDay>{day}</HeaderDay>
        <HeaderInfo>{date.toLocaleTimeString()}</HeaderInfo>
        <HeaderInfo>{date.toLocaleDateString()}</HeaderInfo>
      </HeaderInfoWrapper>
      <Search/>
    </HeaderWrapper>
  )
}

export default Header;