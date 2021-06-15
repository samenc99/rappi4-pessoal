import {api} from "../../api/api";
import {loginURL} from "../endpoints";

export default async function signinEndpoint(form){
    try{
        const res = await api.post(loginURL, form)
        localStorage.setItem('token', res.data.token)
    }
    catch (err){
        throw new Error(err.response.data.message)
    }
}