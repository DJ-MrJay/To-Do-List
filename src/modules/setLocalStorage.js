/* eslint-disable import/prefer-default-export */
import DataClass from './variables.js';

export const setLocalStorage = () => {
  localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
};
