import myNormalize from "../../../functions/myNormalize";

export default function switchError(err) {
  const message = myNormalize(err.message)
  switch (message) {
    case 'usuario nao encontrado':
      return {email:true, password: false}
    case 'senha incorreta' :
      return {email:false, password: true}
    case 'e-mail invalido' :
      return {email:true, password: false}
    default:
      return {email:false, password: false}
  }
}