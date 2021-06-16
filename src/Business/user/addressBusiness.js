import addressEndpoint from "../../controller/user/addressEndpoint";

export default async function addressBusiness(form) {
  await addressEndpoint(form)
}