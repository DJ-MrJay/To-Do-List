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
