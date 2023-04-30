import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { App } from '../App/App.jsx';
import { Home } from '../pages/Home/Home.jsx';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.jsx';

import { LoginForm } from '../pages/LogIn/LoginForm.jsx';

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route path="/" Component={Home} />
      <Route path="login" Component={LoginForm} />
      <Route path="*" Component={NotFoundPage} />
    </Route>,
  ),
);
