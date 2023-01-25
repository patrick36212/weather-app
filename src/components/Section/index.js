import styled from "styled-components";

export const  Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({theme}) => theme.breakpoints.laptop}px;
`;
