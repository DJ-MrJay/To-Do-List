import { addTask } from "../variables.js";

describe('Add new task to the list', ()=> {
    const task = [];
    test('Add an entry to the event task list', () => {
        document.body.innerHTML = `<input id='newItem'>`
        
        addTask(task)
        expect(task).toHaveLength(1);
        expect(task).toBeTruthy();
      });
});