import DataClass from './variables.js';
import { closeButton } from './closeButton';

jest.mock('./variables.js');

describe('closeButton', () => {
  it('should expose a function', () => {
		expect(closeButton).toBeDefined();
	});
  
  it('closeButton should return expected output', () => {
    // const retValue = closeButton(index);
    expect(false).toBeTruthy();
  });
});