import All, {Smartphone} from "../../styleAll/styledAll";
import {Button, DivInput, Logo, MyAlert, MyAllContent, MyForm, MyIconButton, MyInput, Text} from "./styled";
import logoRappi from '../../assets/logo-rappi.svg'
import {useState} from "react";
import useForm from "../../hooks/useForm";
import {StylesProvider} from "@material-ui/core/styles";
import cpfMask from "../../functions/cpfMask";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {validateEmail} from "../../functions/validateEmail";
import {AlertTitle} from "@material-ui/lab";
import useCoordinator from "../../hooks/useCoordinator";
import {renderForm} from "./renderForm";
import signupEndpoint from "../../controller/user/signupEndpoint";

const initialForm = {
  name:'', email:'', cpf:'', password:'', rPassword:''
}

export default function SignUp(){
  const [showPass, setShowPass] = useState({pass:false, rPass: false})
  const [alert, setAlert] = useState(<></>);
  const [form, setForm] = useForm(initialForm)
  const [error, setError] = useState({email:false, password:false, rPassword: false})
  const {toAddress} = useCoordinator()

  //api
  const signup=async()=>{
    const res = await signupEndpoint(form)
    if(typeof res==='boolean'){
      toAddress()
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
      <Smartphone>
        <MyAllContent>
          <Logo>
            <img src={logoRappi} alt={'logo rappi'}/>
          </Logo>
          <Text>Entrar</Text>
          {alert}
        <MyForm onSubmit={onClick}>
          <StylesProvider injectFirst>
            {
              renderForm(
                form, setForm,
                'name',
                'Nome',
                'Nome e Sobrenome'
              )
            }
            {
              renderForm(
                form, setForm,
                'email',
                'E-mail',
                'email@email.com',
                'email',
                '[a-z][A-Z]@[a-z][A-Z].[a-z][A-Z]',
                error.email
              )
            }
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
              {
                renderForm(
                  form,setForm,
                  'password',
                  'Senha',
                  'Mínimo 6 caracteres',
                  showPass.pass?'text':'password',
                  '',
                  error.password
                )
              }
              <MyIconButton>
                {
                  showPass.pass?
                    (
                      <VisibilityIcon
                        onClick={()=>setShowPass({pass: !showPass.pass, rPass: showPass.rPass})}
                      />
                    )
                    :
                    (
                      <VisibilityOffIcon
                        onClick={()=>setShowPass({pass: !showPass.pass, rPass: showPass.rPass})}
                      />
                    )
                }
              </MyIconButton>
            </DivInput>
            <DivInput>
              {
                renderForm(
                  form,setForm,
                  'rPassword',
                  'Confirmar senha',
                  'Mínimo 6 caracteres',
                  showPass.rPass?'text':'password',
                  '',
                  error.rPassword
                )
              }
              <MyIconButton>
                {
                  showPass.rPass?
                    (
                      <VisibilityIcon
                        onClick={()=>setShowPass({pass: showPass.pass, rPass: !showPass.rPass})}
                      />
                    )
                    :
                    (
                      <VisibilityOffIcon
                        onClick={()=>setShowPass({pass: showPass.pass, rPass: !showPass.rPass})}
                      />
                    )}
              </MyIconButton>
            </DivInput>
          </StylesProvider>
          <Button>Criar</Button>
        </MyForm>
        </MyAllContent>
      </Smartphone>
    </All>
  )
}