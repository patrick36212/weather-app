import {Section, SectionTitle} from "../../components/Section";
import Tile from "../../components/Tile";

const Realtime = () => {
  return (
    <Section>
      <SectionTitle>Dziś</SectionTitle>
      <Tile
        title={"Poniedziałek"}
        date={new Date().toLocaleString()}
        degrees={1}
        weather={"Wietrznie"}
      />
    </Section>
  )
}

export default Realtime;