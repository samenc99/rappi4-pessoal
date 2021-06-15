import {validateEmail} from "../../functions/validateEmail";
import signinEndpoint from "../../controller/user/signinEndpoint";

export default async function signinBusinnes(form){
  if(!validateEmail(form.email)){
    throw new Error('E-mail inválido')
  }
  const res = await signinEndpoint(form)
}