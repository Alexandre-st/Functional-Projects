import { useState } from 'react';
import Dropdown from './Dropdown';

const Composition = ({ selection }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="selection-item">
      {selection.options ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {selection.question}
          </button>
          <Dropdown 
            options={selection.options}
            isOpen={isOpen}
          />
        </>
      ) : (
        <p>{selection.question}</p>
      )}
    </div>
  );
}
 
export default Composition;