import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from "../pages/Sign/in/SignIn";
import SignUp from "../pages/Sign/up/SignUp";
import Address from "../pages/Sign/address/Address";
import Feed from "../pages/Feed/Feed";
import Restaurant from "../pages/Restaurant/Restaurant";

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
        <Route exat path={'/feed'}>
          <Feed/>
        </Route>
        <Route exat path={'/restaurant/:id'}>
          <Restaurant />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}