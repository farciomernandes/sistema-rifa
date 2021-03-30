import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Rifa from '../pages/Rifa';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Finaliza from '../pages/Finaliza';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/rifa" component={Rifa} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/finalizar" component={Finaliza} />
    </Switch>
);

export default Routes;
