import {Icon, TileAdditionalInfo, TileInfo, TileTitle, TileWrapper} from "./styled";

const Tile = ({title, date, weather, degrees}) => {
  return (
    <TileWrapper>
      <Icon/>
      <TileInfo>{date}</TileInfo>
      <TileTitle>{title}</TileTitle>
      <TileInfo>{degrees} &#8451;</TileInfo>
      <TileAdditionalInfo>{weather}</TileAdditionalInfo>
    </TileWrapper>
  )
};

export default Tile;