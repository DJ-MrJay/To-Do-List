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
