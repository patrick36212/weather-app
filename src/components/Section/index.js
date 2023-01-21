import styled from "styled-components";

export const  Section = styled.section`
  border-radius: 8px;
  padding: 12px;
  max-width: max-content;
  background: ${({theme}) => theme.colors.secondaryTileBackground};
  box-shadow: 2px 2px 4px ${({theme}) => theme.colors.tileBackground};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-weight: 900;
  font-size: 36px;
  text-align: center;
`;
