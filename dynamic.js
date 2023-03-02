// variables

const dropdownToggle = document.querySelector('.dropdown-button');
const dropdown = document.querySelector('.hidden');

//functions

const toggleDropdown = () => {
  dropdown.classList.toggle('visible');
  dropdown.classList.toggle('hidden');
};

// event listeners

dropdownToggle.addEventListener('click', toggleDropdown);
