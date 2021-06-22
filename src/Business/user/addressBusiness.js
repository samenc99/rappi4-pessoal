import addressEndpoint from "../../controller/user/addressEndpoint";

export default async function addressBusiness(form) {
  try{
    const res = await addressEndpoint(form)
    window.localStorage.setItem('token', res.data.token)
  }catch (err){
    throw new Error(err.message)
  }
}