import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Section = ({ title, children, url }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <Button type="button" 
          onClick={() => navigate(url)}
        >
          Edit
        </Button>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};
