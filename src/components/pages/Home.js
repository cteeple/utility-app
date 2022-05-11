import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Wallet from '../wallet/connectWallet';

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
      <Wallet />
    </Fragment>
  );
};
