import styled, { css, keyframes } from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";

const translateY = keyframes`
  0% {
    opacity: 0;
    transform: transLateY(-20px)
  }
  100% {
    opacity: 1;
    transform: transLateY(0px)
  }
`;

const dropDownSearch = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 100%;
    opacity: 1;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  max-height: 0;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      animation: ${dropDownSearch} 0.3s linear;
      max-height: 100%;
      opacity: 1;
    `}
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.mainFont};
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  margin: 0 6px;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const SearchDropdownWrapper = styled.div`
  position: absolute;
  top: 50px;
  z-index: 1;
  width: 100%;
`;

export const SearchDropdownInfoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-auto-rows: max-content;
  gap: 6px;
`;

export const SearchDropdownInfoItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.mainFont};
  border-radius: 5px;

  animation: ${translateY} 0.7s ease-out;
`;

export const SearchDropdownInfoButton = styled.button`
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  color: ${({ theme }) => theme.colors.mainFont};

  display: grid;
  grid-auto-rows: max-content;
  gap: 2px;
`;

export const SearchDropdownInfo = styled.span`
  font-size: 14px;

  ${({ cityName }) =>
    cityName &&
    css`
      font-size: 16px;
      font-weight: 600;
    `}
`;
