import {api} from "../../api/api";
import {signupURL} from "../endpoints";

export default async function signupEndpoint(form) {
    try{
      const res = await api.post(signupURL, form)
      window.localStorage.setItem('token', res.data.token)
    }catch (err){
      throw new Error(err.response.data.message)
    }
}