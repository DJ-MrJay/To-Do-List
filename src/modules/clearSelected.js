/* eslint-disable import/prefer-default-export */
import DataClass from './variables.js';

export const clearSelected = () => {
  DataClass.dataStructure = DataClass.dataStructure.filter((item) => !item.completed);
};
