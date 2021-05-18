import Form from "../../components/Form/Form";
import {useState} from 'react'
import objectForm from "../../components/Form/objectForm";
import useForm from "../../hooks/useForm";
import All from '../../styleAll/styledAll'
import {api} from "../../api/api";
import useCoordinator from "../../hooks/useCoordinator";
import useValidation from "../../hooks/useValidation";

const initialForm = {email:'', password:''}
const label = objectForm(initialForm, ['E-mail', 'Senha'])
const type = objectForm(initialForm, ['email', 'password'])
const placeholder = objectForm(initialForm, ['email@email.com', 'Mínimo 6 caracteres'])
const required = objectForm(initialForm, [true,true])


export default function SignIn(){
  //validation
  const {toFeed} = useCoordinator()
  if(useValidation())toFeed()

  const [error, setError] = useState(objectForm(initialForm, [false,false]));
  const [form, setForm] = useForm(initialForm)


  const signin = async()=>{
    try{
      const res = await api.post('login', form)
      localStorage.setItem('token', res.data.token)
      toFeed()
    }
    catch (err){
      alert(err.response.data.message)
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

  const onClick=(e)=>{
    e.preventDefault()
    signin()
  }

  return(
    <All>
      <Form
        form={form}
        setForm={setForm}
        initialForm={initialForm}
        label={label}
        type = {type}
        placeholder={placeholder}
        error={error}
        button={{onClick, text:'Entrar'}}
        required={required}
      />
    </All>
  )
}
