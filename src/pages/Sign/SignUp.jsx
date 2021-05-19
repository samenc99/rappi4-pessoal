import All from "../../styleAll/styledAll";
import {Logo, MyAllContent, MyForm, MyInput, Text} from "./styled";
import logoRappi from '../../assets/logo-rappi.svg'
import {useEffect, useRef, useState} from "react";
import useForm from "../../hooks/useForm";
import {StylesProvider} from "@material-ui/core/styles";
import cpfMask from "../../functions/cpfMask";

const initialForm = {
  name:'', email:'', cpf:'', password:''
}

export default function SignUp(){
  const [showPass, setShowPass] = useState({pass:false, rPass: false})
  const [alert, setAlert] = useState(<></>);
  const [form, setForm] = useForm(initialForm)
  const [error, setError] = useState(false)

  const onChangeCpf = (e)=>{
    const newForm = {...form, cpf: cpfMask(e.target.value)}
    setForm(newForm)
  }

  return(
    <All>
      <MyAllContent>
        <Logo>
          <img src={logoRappi} />
        </Logo>
        <Text>Entrar</Text>
      <MyForm>
        <StylesProvider injectFirst>
          <MyInput
            key={'name'}
            variant={'outlined'}
            name={'name'}
            label={'Nome'}
            value={form.name}
            onChange={setForm}
            type={'text'}
            placeholder={'Nome e Sobrenome'}
            required
          />
          <MyInput
            key={'email'}
            variant={'outlined'}
            name={'email'}
            label={'E-mail'}
            value={form.email}
            onChange={setForm}
            type={'email'}
            placeholder={'email@email.com'}
            error={error}
            required
          />
          <MyInput
            key={'cpf'}
            variant={'outlined'}
            name={'cpf'}
            label={'CPF'}
            value={form.cpf}
            onChange={onChangeCpf}
            type={'text'}
            placeholder={'000.000.000-00'}
            required
          />
        </StylesProvider>
      </MyForm>
      </MyAllContent>
    </All>
  )
}