import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from "../pages/Sign/SignIn";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'}>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}