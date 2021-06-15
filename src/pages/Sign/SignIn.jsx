import {useState} from 'react'
import useForm from "../../hooks/useForm";
import All, {Smartphone} from '../../styleAll/styledAll'
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
  Text,
  TextClick
} from "./styled";
import logoRappi from '../../assets/logo-rappi.svg'
import {StylesProvider} from "@material-ui/core/styles";
import { AlertTitle } from '@material-ui/lab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {renderForm} from "./renderForm";
import signinBusinnes from "../../Business/user/signinBusinnes";
import myNormalize from "../../functions/myNormalize";
import {MyCircularProgress} from "../components/MyCircularProgress";

//para o formulário
const initialForm = {email:'', password:''}

const alertKey = {
  'usuario nao encontrado' : {email:true, password: false},
  'senha incorreta' : {email:false, password: true},
  'e-mail invalido' : {email:true, password: false}
}

export default function SignIn(){
  //validação
  const {toFeed, toSignUp} = useCoordinator()
  if(useValidation())toFeed()

  const [error, setError] = useState({email:false, password:false})
  const [form, setForm] = useForm(initialForm)
  const [showPass, setShowPass] = useState(false)
  const [alert, setAlert] = useState(<></>);
  const [loading, setLoading] = useState(<></>);

  //interação com usuário - sendForm
  const sendForm=async(e)=>{
    e.preventDefault()
    setAlert(<></>)
    setLoading(<MyCircularProgress/>)
    try{
      await signinBusinnes(form)
    }
    catch (err){
      setLoading(<></>)
      setError(alertKey[myNormalize(err.message)])
      setAlert(<MyAlert severity={'error'}>
        <AlertTitle>Erro</AlertTitle>
        {err.message}
      </MyAlert>)
    }
  }

  return(
    <All>
      <Smartphone>
        <StylesProvider injectFirst>
          <MyAllContent>
            <Logo>
              <img src={logoRappi}/>
            </Logo>
            <Text>Entrar</Text>
              {alert}
              {loading}
            <MyForm onSubmit={sendForm}>

                {
                  renderForm(
                    form,
                    setForm,
                    'email',
                    'E-mail',
                    'email@email.com',
                    'email',
                    '[a-z][A-Z]@[a-z][A-Z].[a-z][A-Z]',
                    error.email
                  )
                }
                <DivInput>
                  {
                    renderForm(
                      form,
                      setForm,
                      'password',
                      'Senha',
                      'Mínimo 6 caracteres',
                      showPass?'text':'password',
                      '',error.password
                    )
                  }
                  <MyIconButton>
                    {
                      showPass?
                        (<VisibilityIcon onClick={()=>setShowPass(!showPass)}/>)
                        :
                        (<VisibilityOffIcon onClick={()=>setShowPass(!showPass)}/>)
                    }
                  </MyIconButton>
                </DivInput>
              <Button>Entrar</Button>
            </MyForm>
            <TextClick onClick={toSignUp}>Não possui cadastro? Clique aqui</TextClick>
          </MyAllContent>
        </StylesProvider>
      </Smartphone>
    </All>
  )
}
