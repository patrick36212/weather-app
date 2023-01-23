import {
  AirQualityIcon,
  AsideNav,
  AsideNavLink,
  AsideWrapper,
  ForecastIcon,
  Logo,
  MapIcon,
  RealTimeIcon
} from "./styled";
import ThemeSwitch from "./ThemeSwitch";

const Aside = () => {
  return (
    <AsideWrapper>
      <Logo/>
      <AsideNav>
        <AsideNavLink>
          <RealTimeIcon/>
          Realtime
        </AsideNavLink>
        <AsideNavLink>
          <ForecastIcon/>
          Forecast
        </AsideNavLink>
        <AsideNavLink>
          <AirQualityIcon/>
          Air quality
        </AsideNavLink>
        <AsideNavLink>
          <MapIcon/>
          Map
        </AsideNavLink>
      </AsideNav>
      <ThemeSwitch/>
    </AsideWrapper>)
}

export default Aside;