import { DivInput, Input, MySearch } from './styled';
import {useInput} from "../../../hooks/useInput";
import {useEffect} from "react";

export default function Search({ restaurants, setRestaurantsRendered, onClick, back}) : string {
  const [input, setInput] = useInput()

  const filter = ()=>{
    if(!back){
      setRestaurantsRendered([...restaurants])
      return
    }

    const newRender = []
    if(input.length>0) {
      for(const restaurant of restaurants){
        if(restaurant.name.toLowerCase().includes(input.toLowerCase())){
          newRender.push(restaurant)
        }
      }
    }
    setRestaurantsRendered(newRender)
  }

  useEffect(
    ()=>setTimeout(()=>filter(),500),
    [input]
  )
  useEffect(()=>{
    if(input.length===0)filter()
    else setInput('')
  },[back])

  return (
    <DivInput>
      <Input
        placeholder="Restaurante"
        onChange={setInput}
        onClick={onClick}
        value={input}/>
      <MySearch />
    </DivInput>
  );
}
