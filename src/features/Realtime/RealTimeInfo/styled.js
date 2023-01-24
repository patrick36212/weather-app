import styled from "styled-components";

export const RIWrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: max-content;
  color: ${({theme}) => theme.colors.secondaryColor};
`;

export const RIAdditionalInfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;
export const RITitle = styled.h2`
  font-size:24px;
  font-weight: 600;
  line-height: 28px;
  margin: 6px 0;
`;

export const RIInfo = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin: 10px 0;
`;

export const RIAdditionalInfo = styled.span`
  font-size: 16px;
  line-height: 20px;
  margin: 6px 0 0 0;
`;