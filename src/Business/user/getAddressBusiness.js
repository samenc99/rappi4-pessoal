import getAddressEndpoint from "../../controller/user/getAddressEndpoint";

export default async function getAddressBusiness() {
  try{
    const res = await getAddressEndpoint()
    if('address' in res.data){
      if(res.data.address.neighbourhood.length>0){
        return res.data.address
      }
    }
    throw new Error('Address vazio')
  }catch (err){
    throw new Error(err.message)
  }
}