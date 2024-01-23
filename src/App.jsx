import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import SuccessStory from './routes/SuccessStory.jsx'
import Signup from './routes/Signup.jsx'
import FoundPet from './routes/FoundPet.jsx'
import About from './routes/About.jsx'
import Layout from './components/Layout.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/success-stories" element={<SuccessStory />} />
                <Route path="/found-pet" element={<FoundPet />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}