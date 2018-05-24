'use strict';

import ActionTypes from './ActionTypes';
import Dispatcher from '../dispatcher/Dispatcher';

const Actions = {
  addItem(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text,
    });
  },
  minusItem(text) {
    Dispatcher.dispatch({
      type: ActionTypes.MINUS_ITEM,
      text,
    });
  },
};

export default Actions;
