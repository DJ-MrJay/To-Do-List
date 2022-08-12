/* eslint-disable import/prefer-default-export */
import DataClass from './variables.js';

export const closeButton = (index) => {
  DataClass.dataStructure.splice(index, 1);
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    DataClass.dataStructure[i].index = i;
  }
};
