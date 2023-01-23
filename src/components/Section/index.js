import styled, {css} from "styled-components";

export const  Section = styled.section`
  padding: 0 0 36px 0;
  width: 500px;
  
  ${({dashboard}) => dashboard && css`
    width: 100%;
    padding: 32px 20px;
    border-radius: 20px;
    background: ${({theme}) => theme.colors.sectionBackground};
    box-shadow: 4px 4px 4px 0 ${({theme}) => theme.colors.shadow};
  `}
`;

export const SectionTitle = styled.h2`
  padding: 14px 0 36px 10px;
  margin: 0;
  font-weight: 900;
  font-size: 36px;
  
  ${({transparent}) => transparent && css`
    color: ${({theme}) => theme.colors.secondaryFont};
  `}
`;
