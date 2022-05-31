import { getUserAction } from 'actions/actionCreator';
import Spinner from 'components/Spinner/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ roles, ...props }) => {
  const { data: user, isFetching } = useSelector(state => state.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  if (isFetching) {
    return <Spinner mtop />;
  }

  if (user && (!roles || roles.includes(user.role))) {
    return <Route {...props} />;
  }

  return <Redirect to='/' />;
};

export default PrivateRoute;
