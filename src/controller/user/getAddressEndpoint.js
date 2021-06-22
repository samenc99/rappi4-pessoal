import {api} from "../../api/api";
import {headers, profileAddressURL} from "../endpoints";

export default async function getAddressEndpoint() {
  try{
    return await api.get(profileAddressURL, headers())
  }catch (err){
    throw new Error(err.response.data.message)
  }
}