function showData(data, selecor) {
    const element = document.querySelector(selecor);
    element.innerHTML = data;
}

function transformData(data) {
    const { name, surname, patronic } = data;
    const surnameTranform = surname[0].toUpperCase() + surname.slice(1);
    return `${surnameTranform} ${name[0]}. ${patronic[0]}.`;
}

function getDataForm() {
    const NAME = document.querySelector('#name').value;
    const SURNAME = document.querySelector('#surname').value;
    const PATRONIC = document.querySelector('#patronymic').value;

    const DATA = {
        name: NAME,
        surname: SURNAME,
        patronic: PATRONIC
    }
    return transformData(DATA);
}

export function initialsBtn() {
    const BTN_FORM = document.querySelector('#btn');
    BTN_FORM.addEventListener('click', (e) => {
        e.preventDefault();
        let initials = getDataForm();
        showData(initials, '.output-info');
    });
}