import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import { postReq } from './request';

const App = props => {
  const [repos, setRepos] = useState([]);
  const [appLink, setAppLink] = useState('');
  const [repoName, setRepoName] = useState('');

  useEffect(() => {
    fetch('/api/repo/getRepos')
      .then(res => res.json())
      .then(setRepos);
  }, []);

  const saveRepo = () => postReq('/api/repo/addRepo', { repoName, appLink });

  return (
    <div>
      {repos.length ? (
        repos.map(repo => <Card key={repo.repoId} repo={repo} />)
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <Input placeholder='Repo Name' onChange={setRepoName} />
        <Input placeholder='App Link' onChange={setAppLink} />
        <button onClick={saveRepo}>Save Repo</button>
      </div>
    </div>
  );
};

export default App;
