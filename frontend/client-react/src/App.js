import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './mediaQueries.css';

import ClientList from './ClientList';
import ClientEdit from './ClientEdit';
import Home from './Home';
import AppNavbar from './AppNavbar';

const App = () => {
  console.log('Home:', Home);
console.log('ClientList:', ClientList);
console.log('ClientEdit:', ClientEdit);

  return (
    
    <Router>
      <AppNavbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/:id" element={<ClientEdit/>} />
      </Routes>
    </Router>
  );
};

export default App;
