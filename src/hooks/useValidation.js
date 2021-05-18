import useCoordinator from "./useCoordinator";

export default function useValidation(){
  const {toSignIn} = useCoordinator()

  const token = window.localStorage.getItem('token')
  if(!token)toSignIn()
  else return true
}