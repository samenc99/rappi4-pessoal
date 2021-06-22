import styled from "styled-components";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const Content = styled.header`
  width: 100%;
  min-height: 44px;
  max-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.25);
  position: relative;
`

export const MyArrowBack = styled(ArrowBackIosIcon)`
  position: absolute;
  left: 16px;
  cursor: pointer;
`