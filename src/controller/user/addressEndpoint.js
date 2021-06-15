import {api} from "../../api/api";
import {addressURL, headers} from "../endpoints";

export default async function addressEndpoint(form) {
  return api.put(addressURL, form, headers())
}