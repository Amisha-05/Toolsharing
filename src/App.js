import './App.css';
import Frontpage from './Home/Frontpage';
import UploadPost from './Pages/Uploaditems'; // Import the new page component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} /> {/* Your Frontpage */}
          <Route path="/upload" element={<UploadPost />} /> {/* Upload a Post Page */}
          <Route path="/profile" element={<UploadPost />} /> {/* Upload a Post Page */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
