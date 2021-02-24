import './App.css'
import Navigation from './Navbar'
import About from './About'
import Home from './Home'
import Profile from './Profile'
import RouteParams from './RouteParams'
import QueryStrings from './QueryStrings'

import { Switch, Route, Redirect } from 'react-router-dom'

function App() {

  // Llamada a la API para obtener el ususario logueado
  // let userFromApi = { name: 'Sarita', age: 33 }
  let userFromApi

  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/route-params/shop/:season/:clothe" render={props => <RouteParams {...props} otraPrrop="miValor" />} />
        <Route path="/query-strings" render={props => <QueryStrings {...props} />} />
        <Route path="/profile" render={() => userFromApi ? <Profile loggedUser={userFromApi} /> : <Redirect to="/" />} />
      </Switch>
    </>
  )
}

export default App;
