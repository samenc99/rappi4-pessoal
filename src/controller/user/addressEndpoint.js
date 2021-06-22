import {api} from "../../api/api";
import {addressURL, headers} from "../endpoints";

export default async function addressEndpoint(form) {
  try{
    return await api.put(addressURL, form, headers())
  }catch (err){
    throw new Error(err.response.data.message)
  }
}