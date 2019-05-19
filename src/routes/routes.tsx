import * as React from 'react'
import { Route, Switch } from 'react-router-dom';

export const WebRoutes = function () {

    return(
      <React.Fragment>
          <Switch>
             <Route exact path="/" component={null} />
          </Switch>
      </React.Fragment>
    );

};
