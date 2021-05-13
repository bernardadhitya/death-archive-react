import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../../Containers/Login/Login';
import HomePage from '../../Containers/HomePage/HomePage';

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
      <Route path='/skpk' component={SkpkNavigation}/>
      <Route path='/skmk' component={SkmkNavigatior}/>
      <PrivateRoute path='/home' component={HomePage}/>
    </Switch>
  );
};

export default HomeNavigation;