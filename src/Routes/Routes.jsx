import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'}>
          <SignIn />
        </Route>
        <Route exat path={'/signup'}>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}