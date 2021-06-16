import myNormalize from "../../../functions/myNormalize";

export default function switchError(err) {
  const message = myNormalize(err.message)
  switch (message) {
    case 'senha precisa de pelo menos 6 caracteres':
      return {email:false, password: true, rPassword: false}
    case 'senhas nao conferem' :
      return {email:false, password: false, rPassword: true}
    case 'e-mail invalido' :
      return {email:true, password: false, rPassword: false}
    default:
      return {email:false, password: false, rPassword: false}
  }
}