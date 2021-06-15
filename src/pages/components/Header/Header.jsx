import {useHistory} from "react-router-dom";
import {Content, MyArrowBack} from "./styled";


export default function Header({title, back}) {
  const history = useHistory()
  return(
    <Content>
      {
        back? <MyArrowBack onClick={()=>history.goBack()}/> : <></>
      }
      <p>{title}</p>
    </Content>
  )
}