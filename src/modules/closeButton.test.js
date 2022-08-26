import { closeButton } from './closeButton.js';

jest.mock('./variables.js');

describe('Remove a list item', () => {
  it('should expose a function', () => {
    expect(closeButton).toBeDefined();
  });

  it('Close button should remove a list item', () => {
    // const retValue = closeButton(index);
    expect(false).toBeTruthy();
  });
});