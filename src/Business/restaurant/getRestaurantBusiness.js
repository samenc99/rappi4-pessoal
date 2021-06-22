import getRestaurantEndpoint from "../../controller/restaurant/getRestaurantEndpoint";

export default async function getRestaurantBusiness(id) {
  try{
    const res = await getRestaurantEndpoint(id)
    return res.data.restaurant
  }catch (err){
    throw new Error(err.message)
  }
}