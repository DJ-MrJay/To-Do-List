import DataClass from './variables.js';
import { insertNewItem } from './insertNewItem';

jest.mock('./variables.js');

describe('insertNewItem', () => {
  it('should expose a function', () => {
		expect(insertNewItem).toBeDefined();
	});
  
  it('insertNewItem should return expected output', () => {
    // const retValue = insertNewItem(text);
    expect(false).toBeTruthy();
  });
});