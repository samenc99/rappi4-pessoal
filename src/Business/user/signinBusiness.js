import {validateEmail} from "../../functions/validateEmail";
import signinEndpoint from "../../controller/user/signinEndpoint";

export default async function signinBusiness(form){
  if(!validateEmail(form.email)){
    throw new Error('E-mail inválido')
  }
  await signinEndpoint(form)
}