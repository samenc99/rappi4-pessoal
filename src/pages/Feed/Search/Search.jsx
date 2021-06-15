import { DivInput, Input, MySearch } from './styled';
import {useInput} from "../../../hooks/useInput";
import includes from "../../../functions/includes";

export default function Search({ restaurants, setRestaurantsRendered}) : string {
  const [input, setInput] = useInput()

  const onChange=(value)=>{
    
  }

  return (
    <DivInput>
      <Input placeholder="Restaurante" onChange={setInput}/>
      <MySearch />
    </DivInput>
  );
}
