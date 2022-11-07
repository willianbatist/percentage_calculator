export function changeButtonClass(event) {
    const removeSelect = document.getElementsByClassName("home-button");
    for (let i = 0; i < removeSelect.length; i += 1) {
      removeSelect[i].classList.remove('btn-act-t');
      removeSelect[i].classList.add('btn-act');
    }
    const SelectEvento = event.target;
    SelectEvento.classList.remove('btn-act');
    SelectEvento.classList.add('btn-act-t');
}

export function removeChangeButtonClass() {
  const removeSelect = document.getElementsByClassName("home-button");
  for (let i = 0; i < removeSelect.length; i += 1) {
    removeSelect[i].classList.remove('btn-act-t');
    removeSelect[i].classList.add('btn-act');
  }
}

export const handleButtonsEvents = (e, setState) => {
  setState(e.target.value);
  if (e.target.classList.value === 'home-button btn-act-t') {
    removeChangeButtonClass()
  }
  else {
    changeButtonClass(e)
  }
}

export const handleInputChange = (e, setState) => {
  setState(e.target.value);
}

export const handleInput = (e, setState) => {
  removeChangeButtonClass()
  setState(e.target.value);
}
