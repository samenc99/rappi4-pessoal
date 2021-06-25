import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  height: 112px;
  border: 1px solid #b8b8b8;
  display: grid;
  grid-template-columns: 97px 1fr;
  border-radius: 8px;
  //overflow: hidden;
  margin-bottom: 8px;
  position: relative;
`

export const Img = styled.img`
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const Info = styled.div`
  grid-column: 2/3;
  width: 100%;
  height: 100%;
  padding: 16px;
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

export const Button = styled.button`
  height: 31px;
  width: 28%;
  position: absolute;
  bottom: -1px;
  right: -1px;
  border: 1px solid ${props=>props.added?'#e02020':'#000'};
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  color: ${props=>props.added?'#e02020':'#000'};
`

export const Amount = styled.div`
  width: 33px;
  height: 33px;
  border: 1px solid #e86e5a;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #e86e5a;
  position: absolute;
  top:-1px;
  right: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
`