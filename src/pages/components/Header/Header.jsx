import {useHistory} from "react-router-dom";
import {Content, MyArrowBack} from "./styled";


export default function Header({title, back, callbackClick}) {
  const history = useHistory()

  const onClick=()=>{
    if(typeof callbackClick==='function')callbackClick()
    else history.goBack()
  }

  return(
    <Content>
      {
        back? <MyArrowBack onClick={onClick}/> : <></>
      }
      <p>{title}</p>
    </Content>
  )
}