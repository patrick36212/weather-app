import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(348px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    grid-gap: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export default Section;
