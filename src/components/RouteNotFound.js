/*
 * see https://github.com/ReactTraining/react-router/issues/4698#issuecomment-314419439 for more details
 */

import React from 'react';
import { Redirect } from 'react-router-dom';

// TODO move to errors folder?
function RouteNotFound() {
  return <Redirect to={{ state: { notFoundError: true } }} />;
}

export default RouteNotFound;
