/* eslint-disable import/prefer-default-export */
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
