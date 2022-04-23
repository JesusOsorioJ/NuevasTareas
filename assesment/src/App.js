import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="details/:id" element={ <Details />}/>
          <Route path="profile" element={ <Profile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
