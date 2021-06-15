import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";
import Address from "../pages/Sign/Address";
import Feed from "../pages/Feed/Feed";

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
        <Route exat path={'/address'}>
          <Address />
        </Route>
        <Route exat path={'/'}>
          <Feed/>
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}