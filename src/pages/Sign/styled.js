import styled from 'styled-components'
import {AllContent} from "../../styleAll/styledAll";
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const MyAllContent = styled(AllContent)`
  justify-content: center;
`

export const Logo = styled.div`
  width: 104px;
  height: 58px;
  margin-bottom: 16px;
`

export const Text = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`

export const TextClick = styled(Text)`
  margin-top: 16px;
  cursor: pointer;
  transition: opacity 0.5s;
  :hover{
    opacity: 50%;
  }
  :active{
    opacity: 100%;
  }
`

export const MyAlert = styled(Alert)`
  width: 100%;
  margin-bottom: 16px;
`

export const DivBack = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  //box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  //background-color: red;
`

export const MyArrowBack = styled(ArrowBackIosIcon)`
  cursor: pointer;
`

//-------------------------Formulário

export const DivInput = styled.div`
  width: 100%;
  position: relative;
`

export const MyInput = styled(TextField)`
  width: 100%;
  margin-bottom: 16px;
`

export const MyForm = styled.form`
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  height: 42px;
  background-color: #e86e5a;
  border: none;
  border-radius: 2px;
  color: black;
  font-size: 16px;
  cursor: pointer;

  transition: background-color 0.2s;

  :hover {
    background-color: #f15d44;
  }

  :active {
    background-color: #cb4c37;
  }
`

export const Senha = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

export const MyIconButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 3px;
  right: 0px;
  cursor: pointer;
`