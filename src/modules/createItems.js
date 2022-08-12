/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { render } from './render.js';
import { setLocalStorage } from './setLocalStorage.js';
import { toDoList } from './variables.js';
import { editInput } from './editInput.js';
import { checkedItem } from './checkedItem.js';
import { closeButton } from './closeButton.js';
import trashIcon from './icons/Trash.svg';

export default class Dynamic {
  static creatingNewItem = (text, completed, index) => {
    const labelItem = document.createElement('label');
    labelItem.classList.add('to-do-list-item');
    labelItem.id = index;
    if (completed) {
      labelItem.style.backgroundColor = 'rgb(190, 255, 199)';
    }
    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.checked = completed;
    const textItem = document.createElement('input');
    textItem.setAttribute('class', 'input-text');
    textItem.value = text;
    textItem.id = `id_${index}`;
    const inputClosure = document.createElement('img');
    inputClosure.setAttribute('class', 'closure-button');
    inputClosure.setAttribute('src', trashIcon);

    // appendingChild
    toDoList.appendChild(labelItem);
    labelItem.appendChild(inputCheckbox);
    labelItem.appendChild(textItem);
    labelItem.appendChild(inputClosure);

    // inputClosureButton
    inputClosure.addEventListener('click', () => {
      closeButton(index);
      render();
      setLocalStorage();
    });

    // Strikethrough lines in texts
    labelItem.addEventListener('click', () => {
      checkedItem(labelItem, inputCheckbox, index);
    });

    // Editing input of list item
    window.addEventListener('input', (e) => {
      if (e.target.classList.contains('input-text')) {
        const inputText = e.target;
        const inputId = Number(inputText.id.split('_')[1]);
        editInput(inputText, inputId);
        setLocalStorage();
      }
    });
  };
}
