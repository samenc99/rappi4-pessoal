export const loginURL = '/login'
export const signupURL = '/signup'
export const addressURL = '/address'
export const restaurantsURL = '/restaurants'
export const profileAddressURL = '/profile/address'

export function headers(){
  return{
    headers:{
      auth : window.localStorage.getItem('token')
    }
  }
}