/* eslint-disable import/prefer-default-export */
import DataClass from './variables.js';

export const editingText = (text, id) => {
  DataClass.dataStructure[id].description = text.value;
};
