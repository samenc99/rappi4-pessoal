import {useState} from 'react'
import useForm from "../../hooks/useForm";
import All from '../../styleAll/styledAll'
import {api} from "../../api/api";
import useCoordinator from "../../hooks/useCoordinator";
import useValidation from "../../hooks/useValidation";
import {
  Button,
  DivInput,
  Logo,
  MyAlert,
  MyAllContent,
  MyForm,
  MyIconButton,
  MyInput,
  Text,
  TextClick
} from "./styled";
import logoRappi from '../../assets/logo-rappi.svg'
import {validateEmail} from "./validateEmail";
import {StylesProvider} from "@material-ui/core/styles";
import { AlertTitle } from '@material-ui/lab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

//para o formulário
const initialForm = {email:'', password:''}

export default function SignIn(){
  //validação
  const {toFeed, toSignUp} = useCoordinator()
  if(useValidation())toFeed()

  const [error, setError] = useState({email:false, password:false})
  const [form, setForm] = useForm(initialForm)
  const [showPass, setShowPass] = useState(false)
  const [alert, setAlert] = useState(<></>);

  //comunicação com api
  const signin = async()=>{
    try{
      const res = await api.post('login', form)
      localStorage.setItem('token', res.data.token)
      toFeed()
    }
    catch (err){
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          {err.response.data.message}
        </MyAlert>
      )
      if(err.response.data.message==='Usuário não encontrado'){
        const newError = {email:true, password: false}
        setError(newError)
      }
      else if (err.response.data.message==='Senha incorreta'){
        const newError = {email:false, password: true}
        setError(newError)
      }
    }
  }

  //interação com usuário

  const onClick=(e)=>{
    e.preventDefault()
    if(validateEmail(form.email)){
      signin()
    }
    else{
      setAlert(
        <MyAlert severity={'error'}>
          <AlertTitle><strong>Erro</strong></AlertTitle>
          E-mail inválido
        </MyAlert>
      )
    }
  }

  return(
    <All>
      <MyAllContent>
        <Logo>
          <img src={logoRappi}/>
        </Logo>
        <Text>Entrar</Text>
        {alert}
        <MyForm onSubmit={onClick}>
          <StylesProvider injectFirst>
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
            <DivInput>
              <MyInput
                key={'password'}
                variant={'outlined'}
                name={'password'}
                label={'Senha'}
                value={form.password}
                onChange={setForm}
                type={showPass? 'text' : 'password'}
                placeholder={'Mínimo 6 caracteres'}
                min={6}
                error={error.password}
                required
              />
              {/*<Senha src={logoSenha} onClick={()=>setShowPass(!showPass)}/>*/}
              <MyIconButton>
                {showPass? (
                  <VisibilityIcon onClick={()=>setShowPass(!showPass)}/>
                ):(
                  <VisibilityOffIcon onClick={()=>setShowPass(!showPass)}/>
                )}
              </MyIconButton>
            </DivInput>
          </StylesProvider>
          <Button>Entrar</Button>
        </MyForm>
        <TextClick onClick={toSignUp}>Não possui cadastro? Clique aqui</TextClick>
      </MyAllContent>
    </All>
  )
}
