import Form from "../../components/Form/Form";
import {useState} from 'react'
import objectForm from "../../components/Form/objectForm";
import useForm from "../../hooks/useForm";
import All from '../../styleAll/styledAll'

const initialForm = {email:'', password:''}
const label = objectForm(initialForm, ['E-mail', 'Senha'])
const type = objectForm(initialForm, ['email', 'password'])
const placeholder = objectForm(initialForm, ['email@email.com', 'Mínimo 6 caracteres'])

export default function SignIn(){
  const [error, setError] = useState(objectForm(initialForm, [false,false]));
  const [form, setForm] = useForm(initialForm)

  const onClick=(e)=>{
    e && e.preventDefault && e.preventDefault()

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
      />
    </All>
  )
}
