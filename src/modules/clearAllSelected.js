/* eslint-disable import/prefer-default-export */
import DataClass from './variables.js';

export const clearAllSelected = () => {
  DataClass.dataStructure = DataClass.dataStructure.filter((item) => !item.completed);
};
