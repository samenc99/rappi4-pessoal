import {api} from "../../api/api";
import {addressURL, headers} from "../endpoints";

export default async function addressEndpoint(form) {
  try{
    console.log(headers())
    const res = await api.put(addressURL, form, headers())
    window.localStorage.setItem('token', res.data.token)
  }catch (err){
    throw new Error(err.response.data.message)
  }
}