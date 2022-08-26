import { insertNewItem } from './insertNewItem';

jest.mock('./variables.js');

describe('Add a new list item', () => {
  it('should expose a function', () => {
		expect(insertNewItem).toBeDefined();
	});
  
  it('Added item should be displayed', () => {
    // const retValue = insertNewItem(text);
    expect(false).toBeTruthy();
  });
});