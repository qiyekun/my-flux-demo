'use strict';

import { ReduceStore } from 'flux/utils';
import ActionTypes from '../actions/ActionTypes';
import Dispatcher from '../dispatcher/Dispatcher';
import Immutable, { fromJS } from 'immutable'

class ItemStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap()
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_ITEM:
        let itemList = state.get('itemList') ? state.get('itemList') : fromJS([])
        itemList = itemList.push(action.text)
        return state.set('itemList', itemList);

      case ActionTypes.MINUS_ITEM:
        let itemList1 = state.get('itemList') && !state.get('itemList').isEmpty() ? state.get('itemList') : fromJS([])
        itemList1 = itemList1.shift()
        return state.set('itemList', itemList1);

      default:
        return state;
    }
  }
}

export default new ItemStore();
