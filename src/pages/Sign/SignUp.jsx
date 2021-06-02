import All from "../../styleAll/styledAll";
import {Button, DivInput, Logo, MyAlert, MyAllContent, MyForm, MyIconButton, MyInput, Text} from "./styled";
import logoRappi from '../../assets/logo-rappi.svg'
import {useEffect, useRef, useState} from "react";
import useForm from "../../hooks/useForm";
import {StylesProvider} from "@material-ui/core/styles";
import cpfMask from "../../functions/cpfMask";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {validateEmail} from "./validateEmail";
import {AlertTitle} from "@material-ui/lab";
import {api} from "../../api/api";
import useCoordinator from "../../hooks/useCoordinator";

const initialForm = {
  name:'', email:'', cpf:'', password:'', rPassword:''
}

export default function SignUp(){
  const [showPass, setShowPass] = useState({pass:false, rPass: false})
  const [alert, setAlert] = useState(<></>);
  const [form, setForm] = useForm(initialForm)
  const [error, setError] = useState({email:false, password:false, rPassword: false})
  const {toAddress} = useCoordinator()

  const signup=async()=>{
    try{
      const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
      }
      const res = await api.post('signup', body)
      window.localStorage.setItem('token', res.data.token)
      toAddress()
    }
    catch (err){
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          {err.response.data.message}
        </MyAlert>
      )
    }
  }

  //interação com usuário
  const onChangeCpf = (e)=>{
    const newForm = {...form, cpf: cpfMask(e.target.value)}
    setForm(newForm)
  }
  const onClick = (e)=>{
    e.preventDefault()
    if(!validateEmail(form.email)){
      setError({email: true,password: false, rPassword: false})
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          E-mail inválido
        </MyAlert>
      )
      return
    }
    if(form.password.length<6){
      setError({email: false,password: true, rPassword: false})
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Atenção</strong></AlertTitle>
          Senha precisa ter ao menos 6 caracteres
        </MyAlert>
      )
      return
    }
    if(form.password!==form.rPassword){
      setError({email: false,password: false, rPassword: true})
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          Senha de confirmação está diferente
        </MyAlert>
      )
      return
    }
    signup()
  }



  return(
    <All>
      <MyAllContent>
        <Logo>
          <img src={logoRappi} alt={'logo rappi'}/>
        </Logo>
        <Text>Entrar</Text>
        {alert}
      <MyForm onSubmit={onClick}>
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
            error={error.email}
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
          <DivInput>
            <MyInput
              key={'password'}
              variant={'outlined'}
              name={'password'}
              label={'Senha'}
              value={form.password}
              onChange={setForm}
              type={showPass.pass? 'text' : 'password'}
              placeholder={'Mínimo 6 caracteres'}
              minLength={'6'}
              error={error.password}
              required
            />
            {/*<Senha src={logoSenha} onClick={()=>setShowPass(!showPass)}/>*/}
            <MyIconButton>
              {showPass.pass? (
                <VisibilityIcon onClick={()=>setShowPass({pass: !showPass.pass, rPass: showPass.rPass})}/>
              ):(
                <VisibilityOffIcon onClick={()=>setShowPass({pass: !showPass.pass, rPass: showPass.rPass})}/>
              )}
            </MyIconButton>
          </DivInput>
          <DivInput>
            <MyInput
              key={'rPassword'}
              variant={'outlined'}
              name={'rPassword'}
              label={'Confirmar'}
              value={form.rPassword}
              onChange={setForm}
              type={showPass.rPass? 'text' : 'password'}
              placeholder={'Confirme a senha anterior'}
              minLength={'6'}
              error={error.rPassword}
              required
            />
            {/*<Senha src={logoSenha} onClick={()=>setShowPass(!showPass)}/>*/}
            <MyIconButton>
              {showPass.rPass? (
                <VisibilityIcon onClick={()=>setShowPass({pass: showPass.pass, rPass: !showPass.rPass})}/>
              ):(
                <VisibilityOffIcon onClick={()=>setShowPass({pass: showPass.pass, rPass: !showPass.rPass})}/>
              )}
            </MyIconButton>
          </DivInput>
        </StylesProvider>
        <Button>Criar</Button>
      </MyForm>
      </MyAllContent>
    </All>
  )
}