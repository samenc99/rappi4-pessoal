import {validateEmail} from "../../functions/validateEmail";
import signupEndpoint from "../../controller/user/signupEndpoint";

export default async function signupBusinnes(form) {
  if(!validateEmail(form.email)){
    throw new Error('E-mail inválido')
  }
  if(form.password.length<6){
    throw new Error('Senha precisa de pelo menos 6 caracteres')
  }
  if(form.password!==form.rPassword){
    throw new Error('Senhas não conferem')
  }
  delete form.rPassword
  await signupEndpoint(form)
}