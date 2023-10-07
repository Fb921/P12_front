import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil.js';

function App() {
    return(
        <div>
          <Router> 
              <Routes>
                  <Route path="/user/:id" element={<Accueil />} />
                  <Route path="*" element={<Accueil />} />
              </Routes>
          </Router>
        </div>
    );
}

export default App;