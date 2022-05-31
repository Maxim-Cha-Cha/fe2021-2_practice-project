import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import Header from 'components/Header/Header';
import styles from './UserProfile.module.sass';
import CONSTANTS from '../../constants';
import UserInfo from 'components/UserInfo/UserInfo';
import PayForm from 'components/PayForm/PayForm';
import * as actionCreators from 'actions/actionCreator';
import Error from 'components/Error/Error';

const UserProfile = props => {
  const { balance, role } = useSelector(state => state.userStore.data);
  const { profileModeView } = useSelector(state => state.userProfile);
  const { error } = useSelector(state => state.payment);
  const dispatch = useDispatch();

  const {
    cashOut,
    changeProfileModeView,
    clearPaymentStore,
  } = bindActionCreators(actionCreators, dispatch);

  const pay = values => {
    const { number, expiry, cvc, sum } = values;
    cashOut({
      number,
      expiry,
      cvc,
      sum,
    });
  };

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.aside}>
          <span className={styles.headerAside}>Select Option</span>
          <div className={styles.optionsContainer}>
            <div
              className={classNames(styles.optionContainer, {
                [styles.currentOption]:
                  profileModeView === CONSTANTS.USER_INFO_MODE,
              })}
              onClick={() => changeProfileModeView(CONSTANTS.USER_INFO_MODE)}
            >
              UserInfo
            </div>
            {role === CONSTANTS.CREATOR && (
              <div
                className={classNames(styles.optionContainer, {
                  [styles.currentOption]:
                    profileModeView === CONSTANTS.CASHOUT_MODE,
                })}
                onClick={() => changeProfileModeView(CONSTANTS.CASHOUT_MODE)}
              >
                Cashout
              </div>
            )}
          </div>
        </div>
        {profileModeView === CONSTANTS.USER_INFO_MODE ? (
          <UserInfo />
        ) : (
          <div className={styles.container}>
            {parseInt(balance) === 0 ? (
              <span className={styles.notMoney}>
                There is no money on your balance
              </span>
            ) : (
              <div>
                {error && (
                  <Error
                    data={error.data}
                    status={error.status}
                    clearError={clearPaymentStore}
                  />
                )}
                <PayForm sendRequest={pay} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
