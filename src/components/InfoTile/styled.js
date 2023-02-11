import styled, { css } from "styled-components";

export const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 28px;
  margin: 0;
  padding: 0 0 6px 0;
  border-bottom: 2px solid;
`;

export const AdditionalInfo = styled.span`
  font-size: 18px;
  line-height: 20px;
  margin: 6px 0 0 0;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
`;

export const IconInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
`;

export const Info = styled.p`
  font-size: 42px;
  font-weight: 700;
  margin: 0;
`;

export const InfoWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

export const AdditionsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 12px;
  border-left: 2px solid;
`;
