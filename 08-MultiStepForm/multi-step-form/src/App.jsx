import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Steps/About';
import Contact from './components/Steps/Contact';
import Education from './components/Steps/Education';
import { AppProvider } from './contexts/state';

const App = () => {
  return ( 
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/confirm' element={<Confir />} /> */}
        </Routes>
      </Router>
    </AppProvider>
  );
};
 
export default App;

