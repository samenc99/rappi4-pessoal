import {api} from "../../api/api";
import {headers, restaurantsURL} from "../endpoints";

export default async function restaurantEndpoint(){
    const {data:{restaurants}} = await api.get(restaurantsURL, headers())
    if(!restaurants?.length){
      throw new Error('Não há restaurantes.')
    }
    return restaurants
}