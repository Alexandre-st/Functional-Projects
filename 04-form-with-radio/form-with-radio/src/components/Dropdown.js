import {  Field } from 'formik';

const Dropdown = ({ selection, isOpen }) => {
  return (
    <div className={`content ${isOpen ? 'show' : ''}`}>
      {selection.options.map((option, index) => (

          <div className="text" key={index}>
            <label>
              <Field type="radio" name={selection.name} value={option.name} />
              {option.name}
            </label>
          </div>
        
      ))}
    </div> 
  );
}
 
export default Dropdown;