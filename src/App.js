import './App.css';
import Frontpage from './Home/Frontpage';
import Uploaditems from './Pages/Uploaditems';
import ProfilePage from './Pages/profilePage';
import Footer from './component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} /> {/* Your Frontpage */}
          <Route path="/upload" element={<Uploaditems />} /> {/* Upload a Post Page */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Upload a Post Page */}
        </Routes>
        <Footer /> {/* Place the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
