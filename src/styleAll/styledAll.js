import styled from 'styled-components'

const All = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default All

export const Smartphone = styled.div`
  width: min(415px, 100%);
  height: min(800px, 100%);
  display: flex;
  flex-direction: column;
`

export const AllContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
  overflow-y: auto;
  overflow-x: hidden;
`