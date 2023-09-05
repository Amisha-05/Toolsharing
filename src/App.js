import './App.css';
import Frontpage from './Home/Frontpage';
import Uploaditems from './Pages/Uploaditems'; // Import the new page compon
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} /> {/* Your Frontpage */}
          <Route path="/upload" element={<Uploaditems />} /> {/* Upload a Post Page */}
          <Route path="/profile" element={<Uploaditems />} /> {/* Upload a Post Page */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
