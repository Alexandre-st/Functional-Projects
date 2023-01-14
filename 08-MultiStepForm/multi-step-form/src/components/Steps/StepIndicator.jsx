import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppState } from "../../contexts/state";

export const StepIndicator = ({ onStepChange }) => {
  const [state] = useAppState();
  const location = useLocation();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps((steps) => [...steps, location.pathname]);
  }, [location]);

  const getLinkClass = ({ isActive }) => `nav-link ${isActive ? "active" : undefined}`;


  const contactInfoMissing = !state.firstName || !state.email || !state.password;

  const isVisited = (step) => steps.includes(step) && location.pathname !== step;

  const navLinks = [
    {
      url: "/",
      name: "Contact",
      state: {
        showWarning: isVisited("/") && contactInfoMissing,
        showSuccess: isVisited("/") && !contactInfoMissing,
      },
    },
    {
      url: "/education",
      name: "Education",
      state: {
        showSuccess: isVisited("/education"),
      },
    },
    {
      url: "/about",
      name: "About",
      state: {
        showSuccess: isVisited("/about"),
      },
    },
    {
      url: "/confirm",
      name: "Confirm",
      state: {},
    },
  ];

  return (
    <nav className="stepIndicator">
      <div>
        <ul>
          {navLinks.map(({ url, name, state }) => {
            return (
              <li key={url}>
                <StepState showWarning={state.showWarning} showSuccess={state.showSuccess} />
                <NavLink end to={url} className={getLinkClass} onClick={onStepChange}>{name}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

const StepState = ({ showWarning, showSuccess }) => {
  if (showWarning) {
    return <span className='warning-sign'>!!</span>
  } else if (showSuccess) {
    return (
    <div className="checkmark">
      <div className="circle"></div>
      <div className="stem"></div>
      <div className="tick"></div>
    </div>
    );
  } else {
    return null;
  }
};