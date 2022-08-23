export const cleanList = () => {
  const toDoList = document.querySelector('.to-do-list');
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
};

export const clearAll = document.querySelector('.to-do-clear-completed');
export const selectAll = document.querySelector('.select-all');
export const addTask = document.querySelector('.add-task');
export const newItem = document.getElementById('newItem');
export const toDoList = document.querySelector('.to-do-list');
export default class DataClass {
  static dataStructure = []
}

import DataClass from './variables.js';

export const setLocalStorage = () => {
  localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
};

import DataClass, { cleanList } from './variables.js';
import Dynamic from './createItems.js';

export const render = () => {
  cleanList();
  const { dataStructure } = DataClass;
  for (let i = 0; i < dataStructure.length; i += 1) {
    Dynamic.creatingNewItem(dataStructure[i].description, dataStructure[i].completed, i);
  }
};

import DataClass from './variables.js';

export const insertNewItem = (text) => {
  DataClass.dataStructure.push(
    {
      description: text,
      completed: false,
      index: DataClass.dataStructure.length,
    },
  );
};

import DataClass from './variables.js';

export const editInput = (text, id) => {
  DataClass.dataStructure[id].description = text.value;
};

import DataClass from './variables.js';

export const deleteAll = () => {
  DataClass.dataStructure = [];
};

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

import DataClass from './variables.js';

export const closeButton = (index) => {
  DataClass.dataStructure.splice(index, 1);
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    DataClass.dataStructure[i].index = i;
  }
};

import DataClass from './variables.js';

export const clearSelected = () => {
  DataClass.dataStructure = DataClass.dataStructure.filter((item) => !item.completed);
};

import { setLocalStorage } from './setLocalStorage.js';
import DataClass from './variables.js';

export const checkedItem = (labelItem, inputCheckbox, index) => {
  if (inputCheckbox.checked) {
    labelItem.style.backgroundColor = 'rgb(190, 255, 199)';
    DataClass.dataStructure[index].completed = true;
    setLocalStorage();
  } else {
    labelItem.style.backgroundColor = 'rgb(229, 229, 229)';
    DataClass.dataStructure[index].completed = false;
    setLocalStorage();
  }
};







import './style.css';
import Dynamic from './modules/createItems.js';
import { insertNewItem } from './modules/insertNewItem.js';
import { setLocalStorage } from './modules/setLocalStorage.js';
import { clearSelected } from './modules/clearSelected.js';
import { deleteAll } from './modules/deleteAll.js';
import { render } from './modules/render.js';
import DataClass, {
  cleanList, clearAll, selectAll, addTask, newItem,
} from './modules/variables.js';

cleanList();

clearAll.addEventListener('click', () => {
  clearSelected();
  render();
  setLocalStorage();
});

selectAll.addEventListener('click', () => {
  deleteAll();
  setLocalStorage();
  render();
});

addTask.addEventListener('click', () => {
  if (newItem.value === '') {
    alert('Blank input'); // eslint-disable-line no-alert
  } else {
    const { value } = newItem;
    insertNewItem(value);
    newItem.value = '';
    render();
    setLocalStorage();
  }
});

newItem.addEventListener('keypress', (event) => {
  const tecla = event.key;
  const text = event.target.value;
  if (tecla === 'Enter') {
    insertNewItem(text);
    newItem.value = '';
  }
  render();
  setLocalStorage();
});

window.addEventListener('load', () => { // LOCAL STORAGE
  if (localStorage.getItem('listItem')) {
    DataClass.dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));
  }
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    const newObj = DataClass.dataStructure[i];
    Dynamic.creatingNewItem(newObj.description, newObj.completed, i);
  }
});

render();
