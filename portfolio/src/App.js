import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Landing from './pages/Landing';
import { GlobalProvider } from './GlobalContext';
import Home from './pages/Home';
import Social from './pages/Social';
import Hackathons from './pages/Hackathons';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/hackathons' component={Hackathons}/>
          <Route path='/social' component={Social}/>
          <Route path='/' exact component={Landing}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
