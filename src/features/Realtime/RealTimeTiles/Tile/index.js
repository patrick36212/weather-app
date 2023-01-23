import {Icon, TileAdditionalInfo, TileInfo, TileTitle, TileWrapper} from "./styled";

const Tile = ({city, air, degrees}) => {
  return (
    <TileWrapper>
      <Icon/>
      <TileTitle>{city}</TileTitle>
      <TileInfo>{degrees}</TileInfo>
      <TileAdditionalInfo>Air: {air}</TileAdditionalInfo>
    </TileWrapper>
  )
};

export default Tile;