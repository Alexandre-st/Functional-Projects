import { useNavigate } from "react-router-dom";

export const Form = ({ children, onSubmit, nextStep, ...props }) => {
  const navigate = useNavigate();

  // Custom onSubmit callback, handles the navigation to the next step
  const onSubmitCustom = (evt) => {
    evt.preventDefault();
    onSubmit();
    navigate(nextStep);
  };

  return (
    <form className="row" onSubmit={onSubmitCustom} {...props} noValidate>
      {children}
    </form>
  );
};
