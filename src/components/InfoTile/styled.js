import styled, {css} from "styled-components";

export const MainWrapper = styled.article`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  align-items: center;
  padding: 20px;
  border-radius: 30px;
  border: 2px solid ${({theme}) => theme.colors.borderColor};
  box-shadow: 2px 2px 3px ${({theme}) => theme.colors.shadowColor}, -1px -1px 3px ${({theme}) => theme.colors.shadowColor};
  width: 292px;
  color: ${({theme}) => theme.colors.secondaryColor};
  transition: .3s ease-out;
  
  &:hover{
    transform: scale(1.03);
    border: 2px solid ${({theme}) => theme.colors.secondaryColor};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0 4px;
  align-items: center;
  margin: 12px 0;
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
  
  ${({bold}) => bold && css`
    font-weight: 600;
  `}
`;

export const Icon = styled.div`
  height: 48px;
  width: 48px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;