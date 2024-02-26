import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import SuccessStory from './routes/SuccessStory.jsx'
import Signup from './routes/Signup.jsx'
import FoundPet from './routes/FoundPet.jsx'
import About from './routes/About.jsx'
import Layout from './components/Layout.jsx';
import LostPets from './routes/LostPets.jsx';
import UserProfile from './routes/UserProfile.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/success-stories" element={<SuccessStory />} />
                <Route path="/found-pet" element={<FoundPet />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<UserProfile />} />
                <Route path={'/lost-pets'} element={<LostPets />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}