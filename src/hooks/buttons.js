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

