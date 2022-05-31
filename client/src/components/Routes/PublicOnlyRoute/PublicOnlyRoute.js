import { getUserAction } from 'actions/actionCreator';
import Spinner from 'components/Spinner/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router-dom';

const PublicOnlyRoute = props => {
  const { data: user, isFetching } = useSelector(state => state.userStore);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  if (isFetching) {
    return <Spinner mtop />;
  }

  if (!user) {
    return <Route {...props} />;
  }

  history.goBack();
  return null;
};

export default PublicOnlyRoute;
