/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { render } from './render.js';
import { setLocalStorage } from './setLocalStorage.js';
import { toDoList } from './variables.js';
import { editingText } from './editingText.js';
import { strikethroughLines } from './strikethroughLines.js';
import { closingBtn } from './closingBtn.js';
import trashIcon from './icons/Trash.svg';

export default class Dynamic {
  static creatingNewItem = (text, completed, index) => {
    const labelItem = document.createElement('label');
    labelItem.classList.add('todo-list-label');
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
      closingBtn(index);
      render();
      setLocalStorage();
    });

    // Strikethrough lines in texts
    labelItem.addEventListener('click', () => {
      strikethroughLines(labelItem, inputCheckbox, index);
    });

    // Editing input of list item
    window.addEventListener('input', (e) => {
      if (e.target.classList.contains('input-text')) {
        const inputText = e.target;
        const inputId = Number(inputText.id.split('_')[1]);
        editingText(inputText, inputId);
        setLocalStorage();
      }
    });
  };
}
