import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  height: 112px;
  border: 1px solid #b8b8b8;
  display: grid;
  grid-template-columns: 97px 1fr;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`

export const Img = styled.img`
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Info = styled.div`
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Name = styled.div`
  color: #e86e5a;
`

export const Description = styled.p`
  color: #b8b8b8;
`