import {useHistory} from 'react-router-dom'

export default function useCoordinator() {
  const history = useHistory()

  const toSignIn = ()=>history.push('/signin')
  const toFeed = ()=>history.push('/')
  const toSignUp = ()=>history.push('/signup')
  const toAddress = ()=>history.push('/address')

  return{
    toSignIn, toFeed, toSignUp, toAddress
  }
}
