import expect from 'expect';
import { ActionTypes } from 'constants/index';

describe('Constants', () => {
  it('should have "POPULAR_REQUEST"', () => {
    expect(ActionTypes.POPULAR_REQUEST).toEqual('POPULAR_REQUEST');
  });

  it('should have "POPULAR_SUCCESS"', () => {
    expect(ActionTypes.POPULAR_SUCCESS).toEqual('POPULAR_SUCCESS');
  });

  it('should have "POPULAR_FAILURE"', () => {
    expect(ActionTypes.POPULAR_FAILURE).toEqual('POPULAR_FAILURE');
  });

  it('should have "LASTWEEK_REQUEST"', () => {
    expect(ActionTypes.LASTWEEK_REQUEST).toEqual('LASTWEEK_REQUEST');
  });

  it('should have "LASTWEEK_SUCCESS"', () => {
    expect(ActionTypes.LASTWEEK_SUCCESS).toEqual('LASTWEEK_SUCCESS');
  });

  it('should have "LASTWEEK_FAILURE"', () => {
    expect(ActionTypes.LASTWEEK_FAILURE).toEqual('LASTWEEK_FAILURE');
  });

  it('should have "SHOW_ALERT"', () => {
    expect(ActionTypes.SHOW_ALERT).toEqual('SHOW_ALERT');
  });

  it('should have "HIDE_ALERT"', () => {
    expect(ActionTypes.HIDE_ALERT).toEqual('HIDE_ALERT');
  });
});
