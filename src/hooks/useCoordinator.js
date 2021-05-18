import {useHistory} from 'react-router-dom'

export default function useCoordinator() {
  const history = useHistory()

  const toSignIn = ()=>history.push('/signin')
  const toFeed = ()=>history.push('/')
  const toSignUp = ()=>history.push('/signup')

  return{
    toSignIn, toFeed, toSignUp
  }
}
