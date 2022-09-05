import { useState } from 'react';
import Dropdown from './Dropdown';

const Composition = ({ selection }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" key={selection.id}>
      {selection.options ? (
        <>
          <div
            className="title" 
            role="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={() => setIsOpen((prev) => !prev)}  
          >
            <h2 aria-labelledby="radio-group" id="radio-group">{selection.question}</h2>
          </div>
          <Dropdown 
            selection={selection}
            isOpen={isOpen}
          />
        </>
      ) : (
        <h2 aria-labelledby="radio-group" id="radio-group">{selection.question}</h2>
      )}
    </div>
  );
};
 
export default Composition;