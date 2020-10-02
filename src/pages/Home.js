import React from 'react';
import Card from './../components/Card';
import Loader from './../components/Loader';
import useRepos from './../hooks/useRepos';
import WithAuth from './../components/WithAuth';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Home = props => {
  const repos = useRepos();

  if (!repos.length) return <Loader />;
  return (
    <CardsContainer>
      {repos.map(repo => (
        <Card key={repo.repoId} repo={repo} />
      ))}
    </CardsContainer>
  );
};

export default WithAuth(Home);
