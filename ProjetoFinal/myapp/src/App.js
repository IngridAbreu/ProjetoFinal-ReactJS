import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Consulta from './pages/Consulta';
import Cadastrar from './pages/Cadastrar';
import Editar from './pages/Editar';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Consulta} />
          <Route path='/cadastrar' component={Cadastrar} />
          <Route path='/editar/:id' component={Editar} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
