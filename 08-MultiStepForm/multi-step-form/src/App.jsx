import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Steps/About';
import { Confirm } from './components/Steps/Confirm';
import Contact from './components/Steps/Contact';
import Education from './components/Steps/Education';
import StepIndicator from './components/Steps/StepIndicator';
import { AppProvider } from './contexts/state';

const App = () => {
  return ( 
    <AppProvider>
      <Router>
        <StepIndicator />
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/about' element={<About />} />
          <Route path='/confirm' element={<Confirm />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
 
export default App;

