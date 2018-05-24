'use strict';

import React from 'react';

import MainView from './views/Main'

function AppView(props) {
  return (
    <div>
      <MainView {...props}/>
    </div>
  );
}
export default AppView;
