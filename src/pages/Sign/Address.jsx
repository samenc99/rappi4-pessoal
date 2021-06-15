import All, {AllContent, Smartphone} from "../../styleAll/styledAll";
import {Button, DivBack, MyAlert, MyArrowBack, MyForm, Text} from "./styled";
import {StylesProvider} from "@material-ui/core/styles";
import useForm from "../../hooks/useForm";
import useValidation from "../../hooks/useValidation";
import {renderForm} from "./renderForm";
import addressEndpoint from "../../controller/user/addressEndpoint";
import useCoordinator from "../../hooks/useCoordinator";
import {useState} from "react";
import {AlertTitle} from "@material-ui/lab";

const initialForm = {
  street:'',
  number:'',
  neighbourhood: '',
  city:'',
  state: '',
  complement: ''
}

export default function Address(){
  useValidation()
  const {toFeed} = useCoordinator()
  const [form, setForm] = useForm(initialForm)
  const [alert, setAlert] = useState(<></>);

  //api
  const address=async()=>{
    const res = await addressEndpoint(form)
    if(typeof res==='boolean'){
      toFeed()
    }
    else{
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          {res}
        </MyAlert>
      )
    }
  }

  //interação com usuário
  const onClick=(e)=>{
    e.preventDefault()
    address()
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
          {alert}
          <MyForm onSubmit={onClick}>
            <StylesProvider injectFirst>
              {renderForm(form, setForm,'street', 'Logradouro', 'Rua / Av')}
              {renderForm(form, setForm,'number', 'Número','','number', '[0-9]')}
              {renderForm(form, setForm,'complement', 'Complemento', 'Apto / Bloco')}
              {renderForm(form, setForm,'neighbourhood', 'Bairro')}
              {renderForm(form, setForm,'city', 'Cidade')}
              {renderForm(form, setForm,'state', 'Estado')}
            </StylesProvider>
            <Button>Salvar</Button>
          </MyForm>
        </AllContent>
      </Smartphone>
    </All>
  )
}