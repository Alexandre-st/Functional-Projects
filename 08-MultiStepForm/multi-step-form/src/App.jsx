import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Steps/About';
import { Confirm } from './components/Steps/Confirm';
import Contact from './components/Steps/Contact';
import Education from './components/Steps/Education';
import { StepIndicator } from './components/Steps/StepIndicator';
import { AppProvider } from './contexts/state';

const App = () => {
  // This is shared ref
  const buttonRef = useRef();

  const onStepChange = () => {
    buttonRef.current?.click();
  };

  return (
    <AppProvider>
      <Router>
        <StepIndicator onStepChange={onStepChange} />
        <Routes>
          <Route path="/" element={<Contact />} ref={buttonRef} />
          <Route path="/education" element={<Education />} ref={buttonRef} />
          <Route path="/about" element={<About />} ref={buttonRef} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
 
export default App;

