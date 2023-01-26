import styled from "styled-components";
import {Search} from  "@styled-icons/bootstrap/Search";
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  background: linear-gradient(45deg, ${({theme}) => theme.colors.additionalColor} 0%, transparent 100%);
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  margin: 0 6px;
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  color: ${({theme}) => theme.colors.mainColor};
`;