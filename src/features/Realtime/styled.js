import styled from "styled-components";
import { Add } from "@styled-icons/fluentui-system-filled/Add";

export const RealTimeWrapper = styled.div`
  max-width: 470px;
  width: 100%;
  height: 260px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.additionalColor}45;
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.shadowColor};
`;

export const RealTimeAddButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
`;

export const ButtonIcon = styled(Add)`
  width: 48px;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const RealTimeInfo = styled.p`
  margin: 12px 0;
`;
