
import './App.css';
import Login from "./components/Login";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Friends from "./components/Friends"

function App() {
  return (
    <div className="App">
     <Switch>
       <PrivateRoute exact path='/protected' component={Friends}/>
       <Route path='/login' component={Login}/>
       <Route component={Login} />
     </Switch>
    </div>
  );
}

export default App;
