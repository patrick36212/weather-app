import styled from "styled-components";

export const TilesWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 18px 36px;
`;
export const TileWrapper = styled.article`
  background: ${({theme}) => theme.colors.tileBackground};
  box-shadow: 4px 4px 4px 0 #00000040;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  border-radius: 8px;
`;

export const TileTitle = styled.h2`
  font-size:24px;
  font-weight: 600;
  line-height: 28px;
  margin: 6px 0;
`;

export const TileInfo = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  margin: 10px 0;
`;

export const TileAdditionalInfo = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin: 6px 0 0 0;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: black;
`;
