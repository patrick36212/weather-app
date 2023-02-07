import styled, {css} from "styled-components";

export const  Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({theme}) => theme.breakpoints.laptop}px;
  width: 100%;
  gap: 20px;
  
  ${({innerSection}) => innerSection && css`
    justify-content: center;
    height: 100%;
  `}
`;
