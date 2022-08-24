const Dropdown = ({ options, isOpen }) => {
  return ( 
    <div className={`composition-dropdown ${isOpen ? 'show' : ''}`}>
      {options.map((option, index) => (
        <p key={index}>{option.name}</p>
    ))}
    </div>
  );
}
 
export default Dropdown;
