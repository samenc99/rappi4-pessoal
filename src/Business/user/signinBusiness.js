import {validateEmail} from "../../functions/validateEmail";
import signinEndpoint from "../../controller/user/signinEndpoint";

export default async function signinBusiness(form){
  if(!validateEmail(form.email)){
    throw new Error('E-mail inválido')
  }
  try{
    const res = await signinEndpoint(form)
    window.localStorage.setItem('token', res.data.token)
  }catch (err){
    throw new Error(err.message)
  }
}