import All, {Smartphone} from "../../../styleAll/styledAll";
import {Button, DivInput, Logo, MyAlert, MyAllContent, MyForm, MyIconButton, MyInput, Text} from "../styled";
import logoRappi from '../../../assets/logo-rappi.svg'
import {useState} from "react";
import useForm from "../../../hooks/useForm";
import {StylesProvider} from "@material-ui/core/styles";
import cpfMask from "../../../functions/cpfMask";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {AlertTitle} from "@material-ui/lab";
import useCoordinator from "../../../hooks/useCoordinator";
import {renderForm} from "../renderForm";
import {MyCircularProgress} from "../../components/MyCircularProgress";
import signupBusiness from "../../../Business/user/signupBusiness";
import switchError from "./switchError";

const initialForm = {
  name:'', email:'', cpf:'', password:'', rPassword:''
}

export default function SignUp(){
  const [showPass, setShowPass] = useState({pass:false, rPass: false})
  const [alert, setAlert] = useState(<></>);
  const [form, setForm] = useForm(initialForm)
  const [error, setError] = useState({email:false, password:false, rPassword: false})
  const [loading, setLoading] = useState(<></>);
  const {toAddress} = useCoordinator()

  //interação com usuário
  const onChangeCpf = (e)=>{
    const newForm = {...form, cpf: cpfMask(e.target.value)}
    setForm(newForm)
  }

  const sendForm = async(e)=>{
    e.preventDefault()
    setAlert(<></>)
    setLoading(<MyCircularProgress/>)
    try{
      await signupBusiness(form)
      toAddress()
    }catch (err){
      setLoading(<></>)
      setError(switchError(err))
      setAlert(
        <MyAlert severity={'error'}>,
          <AlertTitle>Erro</AlertTitle>
          {err.message}
        </MyAlert>
        )
    }
  }

  return(
    <All>
      <Smartphone>
        <StylesProvider injectFirst>
          <MyAllContent>
            <Logo>
              <img src={logoRappi} alt={'logo rappi'}/>
            </Logo>
            <Text>Criar</Text>
            {alert}
            {loading}
            <MyForm onSubmit={sendForm}>
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
              <Button>Criar</Button>
            </MyForm>
          </MyAllContent>
        </StylesProvider>
      </Smartphone>
    </All>
  )
}