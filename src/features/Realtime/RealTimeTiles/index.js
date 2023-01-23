import {Section, SectionTitle} from "../../../components/Section";
import {TilesWrapper} from "./Tile/styled";
import Tile from "./Tile";

const RealTimeTiles = () => {
  return(
    <Section>
      <SectionTitle transparent>Capital cities</SectionTitle>
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

export default RealTimeTiles;