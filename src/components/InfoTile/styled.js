import styled, {css} from "styled-components";
import {SunriseFill, SunsetFill} from "@styled-icons/bootstrap"

export const MainWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  gap: 55px;
  color: ${({theme}) => theme.colors.secondaryColor};
`;

export const AdditionalWrapper = styled.article`
  display: grid;
  grid-auto-rows: max-content;
  gap: 14px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 12px;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  margin: 6px 0;
  
  ${({centerTitle}) => centerTitle && css`
    text-align: center;
  `}
`;

export const Info = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`;

export const AdditionalInfo = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin: 6px 0 0 0;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`

export const SunriseIcon = styled(SunriseFill)`
  width: 48px;
`;

export const SunsetIcon = styled(SunsetFill)`
  width: 48px;
`;