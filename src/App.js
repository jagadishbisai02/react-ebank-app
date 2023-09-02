import {Redirect, Switch, Route} from 'react-router-dom'
import LoginRoute from './components/Login'
import HomeRoute from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectiveRoute'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
