const handleDropdownClicked = () => {
  const dropdown = document.querySelector('.dropdown');
  toggleDropdown(!dropdown?.classList.contains('open'));
};

