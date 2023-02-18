import styled, { css } from "styled-components";

export const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  padding: 0 0 6px 0;
  border-bottom: 2px solid;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    border-bottom: 1px solid;
  }
`;

export const AdditionalInfo = styled.span`
  font-size: 18px;
  line-height: 20px;
  margin: 6px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 11px;
  }

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
      text-align: center;
    `}
`;

export const IconInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 0 4px;
  max-width: 90%;
`;

export const Icon = styled.div`
  height: 64px;
  width: 64px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 32px;
    width: 32px;
  }
`;

export const Info = styled.p`
  font-size: 42px;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 28px;
  }
`;

export const InfoWrapper = styled.div`
  max-height: 100%;
  display: grid;
  align-items: center;
  margin: 12px 0;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0;
  }
`;

export const AdditionsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 12px;
  border-left: 2px solid;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    border-left: 1px solid;
  }
`;
