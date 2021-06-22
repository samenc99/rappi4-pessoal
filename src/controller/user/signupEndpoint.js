import {api} from "../../api/api";
import {signupURL} from "../endpoints";

export default async function signupEndpoint(form) {
    try{
      return await api.post(signupURL, form)
    }catch (err){
      throw new Error(err.response.data.message)
    }
}