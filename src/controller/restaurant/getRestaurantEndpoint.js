import {api} from "../../api/api";
import {headers, restaurantsURL} from "../endpoints";

export default async function getRestaurantEndpoint(id) {
  try{
    return await api.get(`${restaurantsURL}/${id}`, headers())
  }catch (err){
    throw new Error(err.response.data.message)
  }
}