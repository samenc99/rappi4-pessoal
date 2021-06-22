import {api} from "../../api/api";
import {loginURL} from "../endpoints";

export default async function signinEndpoint(form){
    try{
        return await api.post(loginURL, form)
    }
    catch (err){
        throw new Error(err.response.data.message)
    }
}