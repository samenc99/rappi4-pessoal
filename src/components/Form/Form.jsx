import {MyForm, MyInput} from "./styled";
import { StylesProvider } from '@material-ui/core/styles';

export default function Form({form,setForm,initialForm, label,
                               type, placeholder, error, button,required}) {

  const renderInputs = ()=>{
    const r = []
    for(let obj in initialForm){
      r.push(
        <MyInput
          key={obj}
          variant={'outlined'}
          name={obj}
          label={label[obj]}
          value={form[obj]}
          onChange={setForm}
          type={type[obj]}
          placeholder={placeholder[obj]}
          error={error[obj]}
          required={required[obj]}
        />
      )
    }
    return r
  }

  return(
    <MyForm onSubmit={button.onClick}>
      <StylesProvider injectFirst>
        {renderInputs()}
        <button>{button.text}</button>
      </StylesProvider>
    </MyForm>
  )
}