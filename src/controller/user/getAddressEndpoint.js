import {api} from "../../api/api";
import {headers, profileAddressURL} from "../endpoints";

export default async function getAddressEndpoint() {
  try{
    const res = await api.get(profileAddressURL, headers())
    if('address' in res.data){
      if(res.data.address.neighbourhood.length>0){
        return res.data.address
      }
    }
    throw new Error('Address vazio')
  }catch (err){
    throw new Error(err.message || err.response.data.message)
  }
}