import {api} from "../../api/api";
import {headers, restaurantsURL} from "../endpoints";

export default async function getRestaurantsEndpoint(){
  try{
    return await api.get(restaurantsURL, headers())
  }catch (err){
    throw new Error(err.response.data.message)
  }
}