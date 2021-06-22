import {useHistory} from 'react-router-dom'

export default function useCoordinator() {
  const history = useHistory()

  const toSignIn = ()=>history.push('/signin')
  const toFeed = ()=>history.push('/feed')
  const toSignUp = ()=>history.push('/signup')
  const toAddress = ()=>history.push('/address')
  const goBack = ()=>history.goBack()

  return{
    toSignIn, toFeed, toSignUp, toAddress, goBack
  }
}
