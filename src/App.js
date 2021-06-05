import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard.js'



export default function App() {
  return (
        <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
      
  );
}