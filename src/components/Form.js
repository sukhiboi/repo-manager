import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import styled from 'styled-components';
import { postReq } from './../request';

const CenterLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: Roboto;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0;
`;

const FormLayout = styled.form`
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0 2rem 2rem;
`;

const InputLayout = styled(Input)`
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  padding: 10px 1rem;
  font-family: Roboto;
  font-size: 1rem;
  display: block;
  width: 20rem;
  margin-bottom: 1rem;

  &:focus {
    border: 1px solid #000;
  }
`;

const Button = styled.button`
  background: none;
  outline: none;
  font-size: 1rem;
  border: 1px solid #cfcfcf;
  padding: 10px 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
  }
`;

const Form = props => {
  const [appLink, setAppLink] = useState('');
  const [repoName, setRepoName] = useState('');

  const history = useHistory();

  const saveRepo = e => {
    e.preventDefault();
    postReq('/api/repo/addRepo', { repoName, appLink }).then(() =>
      history.push('/')
    );
  };

  return (
    <CenterLayout>
      <FormLayout onSubmit={saveRepo}>
        <Title>Add a new Repo</Title>
        <InputLayout placeholder='Repo Name' onChange={setRepoName} required />
        <InputLayout
          type='url'
          placeholder='App Link'
          onChange={setAppLink}
          required
        />
        <Button>Save Repo</Button>
      </FormLayout>
    </CenterLayout>
  );
};

export default Form;
