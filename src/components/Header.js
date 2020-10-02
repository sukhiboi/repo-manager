import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  font-family: Roboto;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;

  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    text-decoration: none;
  }
`;

const AppTitle = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = props => {
  const logout = () => {
    fetch('/api/user/logout')
      .then(res => res.json())
      .then(props.user.setUser);
  };

  return (
    <HeaderLayout>
      <AppTitle to='/' children='Repo Manager' />
      <UserActions>
        <Link to='/addRepo'>
          <Button text='Add Repo' />
        </Link>
        <Link to='#'>
          <Button text='Logout' onClick={logout} />
        </Link>
      </UserActions>
    </HeaderLayout>
  );
};

export default Header;
