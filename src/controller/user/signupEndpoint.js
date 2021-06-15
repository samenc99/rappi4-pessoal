import {api} from "../../api/api";
import {signupURL} from "../endpoints";

export default async function signupEndpoint(form) {
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password
    }
    const res = await api.post(signupURL, body)
    window.localStorage.setItem('token', res.data.token)
}