import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  min-height: 42px;
  max-height: 42px;
  display: flex;
  //justify-content: center;
  align-items: center;
  list-style: none;
  overflow-x: auto;
  margin-bottom: 8px;
`

export const Item = styled.li`
  margin: 0 15px;
  color: ${props=>props.active?'#E86E5A' : 'black'}
`