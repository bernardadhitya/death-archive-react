import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../../Containers/Login/Login';
import HomePage from '../../Containers/HomePage/HomePage';
import SkmkFormPage from '../../Containers/SkmkFormPage/SkmkFormPage';
import SkmkFormDisplayPage from '../../Containers/SkmkFormDisplayPage/SkmkFormDisplayPage';

const DummyPage = () => (
  <div>
    <h1>This is a dummy page</h1>
  </div>
)

const SkmkNavigatior = ({match}) => {
  return (
    <Switch>
      <PrivateRoute exact path={match.url}>
        <Redirect to={`/${match.url}/rekap`}/>
      </PrivateRoute>
      <PrivateRoute path={`${match.url}/rekap`} component={DummyPage}/>
      <PrivateRoute path={`${match.url}/form/display`} component={SkmkFormDisplayPage}/>
      <PrivateRoute path={`${match.url}/form`} component={SkmkFormPage}/>
      <PrivateRoute path={`${match.url}/:id`} component={DummyPage}/>
    </Switch>
  )
}

const SkpkNavigation = ({match}) => {
  return (
    <Switch>
      <PrivateRoute exact path={match.url}>
        <Redirect to={`/${match.url}/rekap`}/>
      </PrivateRoute>
      <PrivateRoute path={`${match.url}/rekap`} component={DummyPage}/>
      <PrivateRoute path={`${match.url}/form`} component={DummyPage}/>
      <PrivateRoute path={`${match.url}/:id`} component={DummyPage}/>
    </Switch>
  )
}


const HomeNavigation = () => {
  return (
    <Switch>
      <Route exact path='/'><Redirect to='/login'/></Route>
      <Route path='/login' component={Login}/>
      <Route path='/skpk' component={SkpkNavigation}/>
      <Route path='/skmk' component={SkmkNavigatior}/>
      <PrivateRoute path='/home' component={HomePage}/>
      <PrivateRoute path='/bulanan' component={DummyPage}/>
    </Switch>
  );
};

export default HomeNavigation;