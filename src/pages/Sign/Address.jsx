import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import {Button, DivBack, MyAllContent, MyArrowBack, MyForm, MyInput, Text} from "./styled";
import {StylesProvider} from "@material-ui/core/styles";
import useForm from "../../hooks/useForm";

const initialForm = {
  street:'',
  number:'',
  neighbourhood: '',
  city:'',
  state: '',
  complement: ''
}



export default function Address(){

  const [form, setForm] = useForm(initialForm)

  const render = (name, label, placeholder=label, type='text')=>{
    if(placeholder.length===0)placeholder=label
    return <MyInput
      key={name}
      variant={'outlined'}
      name={name}
      label={label}
      value={form[name]}
      onChange={setForm}
      type={type}
      placeholder={placeholder}
      required
    />
  }

  return(
    <All>
      <Smartphone>
        <DivBack>
          <StylesProvider injectFirst>
            <MyArrowBack />
          </StylesProvider>
        </DivBack>
        <AllContent>
          <Text>Meu endereço</Text>
          <MyForm>
            <StylesProvider injectFirst>
              {render('street', 'Logradouro', 'Rua / Av')}
              {render('number', 'Número')}
              {render('complement', 'Complemento', 'Apto / Bloco')}
              {render('neighbourhood', 'Bairro')}
              {render('city', 'Cidade')}
              {render('state', 'Estado')}
            </StylesProvider>
            <Button>Salvar</Button>
          </MyForm>
        </AllContent>
      </Smartphone>
    </All>
  )
}