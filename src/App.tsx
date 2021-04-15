import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Route';

import GlobalStyle from './global';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes />
        <GlobalStyle />
    </BrowserRouter>
);

export default App;
