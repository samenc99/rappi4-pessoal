import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  min-height: 188px;
  max-height: 188px;
  margin-bottom: 10px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  overflow: hidden;
`

export const Img = styled.img`
  height: 120px;
  width: 100%;
  object-fit: cover;
`

export const Info = styled.div`
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  margin-top: -4px;
`

export const Name = styled.p`
  color: #e86e5a;
`

export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b8b8b8;
`