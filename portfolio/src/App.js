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
import Internships from './pages/Internships';
import NotFound from './pages/404';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/internships' component={Internships}/>
          <Route path='/hackathons' component={Hackathons}/>
          <Route path='/social' component={Social}/>
          <Route path='/:other' component={NotFound}/>
          <Route path='/' exact component={Landing}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
