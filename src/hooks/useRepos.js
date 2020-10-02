import { useEffect, useState } from 'react';

export default () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('/api/repo/getRepos')
      .then(res => res.json())
      .then(setRepos);
  }, []);
  return repos;
};
