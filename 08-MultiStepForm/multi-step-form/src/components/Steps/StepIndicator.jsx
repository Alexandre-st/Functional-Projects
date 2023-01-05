import { useLocation } from "react-router-dom";

const StepIndicator = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      'nav-link ' + (path === location.pathname ? 'active' : '')
    );
  };

  return (
    <nav className="stepIndicator">
      <div>
        <ul>
          <li>
            <span className={getLinkClass('/')}>
              Contact
            </span>
          </li>
          <li>
            <span className={getLinkClass('/education')}>
              Education
            </span>
          </li>
          <li>
            <span className={getLinkClass('/about')}>
            About
          </span>
          </li>
          <li>
            <span className={getLinkClass('/confirm')}>
              Confirm
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StepIndicator;