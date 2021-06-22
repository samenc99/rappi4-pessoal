import {api} from "../../api/api";
import {headers, restaurantsURL} from "../endpoints";

export default async function getRestaurantEndpoint(){
  try{
    return await api.get('/restaurants', headers())
  }catch (err){
    throw new Error(err.response.data.message)
  }
}