import Home from './pages/Home';
import { GlobalProvider } from './GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
