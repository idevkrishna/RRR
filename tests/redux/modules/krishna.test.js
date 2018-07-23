import reducer, { defaultState } from 'redux/modules/krishna';
import deepFreeze from 'deep-freeze';

describe('(Redux) krishna', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
