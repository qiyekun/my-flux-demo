'use strict';

import App from '../app';
import { Container } from 'flux/utils';

import Actions from '../actions/Actions'
import Stores from '../stores/Stores'

function getStores() {
  return [Stores];
}

function getState() {
  return {
    itemState: Stores.getState(),

    addItem: Actions.addItem,
    minusItem: Actions.minusItem,
  };
}

export default Container.createFunctional(App, getStores, getState);