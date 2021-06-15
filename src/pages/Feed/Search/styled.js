import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';

export const Input = styled.input`
  height: 56px;
  width: 100%;
  padding-left: 53px;
  padding-right: 10px;
  border: 1px solid #b8b8b8;
  border-radius: 2px;
`

export const DivInput = styled.div`
  margin-top: 8px;
  position: relative;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
`

export const MySearch = styled(SearchIcon)`
  position: absolute;
  left: 16px;
  color: #a8a8a8;
`