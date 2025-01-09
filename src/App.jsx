import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import PersonalizedPage from './pages/PersonalizedPage'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/personalized" element={<PersonalizedPage />} />
          <Route path="*" element={<NotRouteFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
