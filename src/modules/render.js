/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import DataClass, { cleanList } from './variables.js';
import Dynamic from './createItems.js';

export const render = () => {
  cleanList();
  const { dataStructure } = DataClass;
  for (let i = 0; i < dataStructure.length; i += 1) {
    Dynamic.creatingNewItem(dataStructure[i].description, dataStructure[i].completed, i);
  }
};
