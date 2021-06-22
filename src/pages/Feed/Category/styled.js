import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  height: 42px;
  display: flex;
  //justify-content: center;
  align-items: center;
  list-style: none;
  overflow-x: auto;
`

export const Item = styled.li`
  margin: 0 10px;
  color: ${props=>props.active?'#E86E5A' : 'black'}
`