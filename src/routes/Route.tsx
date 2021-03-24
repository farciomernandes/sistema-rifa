import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Rifa from '../pages/Rifa';
import Cadastro from '../pages/Cadastro';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/rifa" component={Rifa} />
        <Route path="/cadastro" component={Cadastro} />
    </Switch>
);

export default Routes;
