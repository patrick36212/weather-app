import {Section, SectionTitle} from "../../components/Section";
import Tile from "./Tile";
import {TilesWrapper} from "./Tile/styled";

const Realtime = () => {
  return (
    <Section>
      <SectionTitle>Capital cities</SectionTitle>
      <TilesWrapper>
        <Tile
          city={"Warsaw"}
          degrees={"+7℃"}
          air={"Fair"}
        />
        <Tile
          city={"Warsaw"}
          degrees={"+7℃"}
          air={"Fair"}
        />
        <Tile
          city={"Warsaw"}
          degrees={"+7℃"}
          air={"Fair"}
        />
        <Tile
          city={"Warsaw"}
          degrees={"+7℃"}
          air={"Fair"}
        />
        <Tile
          city={"Warsaw"}
          degrees={"+7℃"}
          air={"Fair"}
        />
        <Tile
          city={"Warsaw"}
          degrees={"+7℃"}
          air={"Fair"}
        />
      </TilesWrapper>
    </Section>
  )
}

export default Realtime;