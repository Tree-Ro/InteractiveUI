function makeDropDown(eventType, dropdownNode, dropdownWrapper) {
  dropdownWrapper.addEventListener(`${eventType}`, function (event) {
    event.stopPropagation();
    enableDropdown();

    if (event.target === dropdownWrapper) {
      disableDropdown();
    }
  });

  document.addEventListener(`${eventType}`, function (event) {
    if (!dropdownWrapper.contains(event.target)) {
      disableDropdown();
    } else if (event.target === dropdownWrapper) {
      disableDropdown();
    }
  });

  function disableDropdown() {
    dropdownNode.classList.remove('visible');
    dropdownNode.classList.add('hidden');
  }

  function enableDropdown() {
    dropdownNode.classList.remove('hidden');
    dropdownNode.classList.add('visible');
  }
}

export default makeDropDown;
