import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../../Containers/Login/Login';

const DummyPage = () => (
  <div>
    <h1>This is a dummy page</h1>
  </div>
)

const SkmkNavigatior = ({match}) => {
  return (
    <Switch>
      <PrivateRoute exact path={match.url} component={DummyPage}/>
      <PrivateRoute path={`${match.url}/rekap`} component={DummyPage}/>
      <PrivateRoute path={`${match.url}/form`} component={DummyPage}/>
      <PrivateRoute path={`${match.url}/:id`} component={DummyPage}/>
    </Switch>
  )
}

const SkpkNavigation = ({match}) => {
  return (
    <Switch>
      <PrivateRoute exact path={match.url} component={DummyPage}/>
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
      <Route path='/home' component={DummyPage}/>
      <Route path='/skpk' component={SkpkNavigation}/>
      <Route path='/skmk' component={SkmkNavigatior}/>
    </Switch>
  );
};

export default HomeNavigation;