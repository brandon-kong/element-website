import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/about/index.jsx'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/about">
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
