import React, { useState } from 'react';
import Input from './Input';
import { postReq } from './../request';

const Form = props => {
  const [appLink, setAppLink] = useState('');
  const [repoName, setRepoName] = useState('');

  const saveRepo = e => {
    e.preventDefault();
    postReq('/api/repo/addRepo', { repoName, appLink });
    props.postSubmit();
  };

  return (
    <form onSubmit={saveRepo}>
      <Input placeholder='Repo Name' onChange={setRepoName} required />
      <Input type='url' placeholder='App Link' onChange={setAppLink} required />
      <button>Save Repo</button>
    </form>
  );
};

export default Form;
