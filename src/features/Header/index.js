import {HeaderDay, HeaderInfo, HeaderInfoWrapper, HeaderWrapper} from "./styled";
import Search from "./Search";

const Header = () => {

  const date = new Date();

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