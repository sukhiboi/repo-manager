import React from 'react';
import Description from './Description';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }
`;

const CardLayout = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  width: fit-content;
  font-family: Roboto;
  width: 20%;
  height: fit-content;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

const Username = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 1px 1px 6px;
  color: rgba(0, 0, 0, 0.6);
`;

const Tag = styled.span`
  border-radius: 10rem;
  display: block;
  font-size: 0.8rem;
  background: #cfcfcf;
  padding: 4px 10px;
  width: fit-content;
  margin: 2px;
  cursor: default;
`;

const Link = styled.a`
  color: #000;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  padding: 4px 10px;
  text-decoration: none;
  margin-left: 10px;
  display: block;
  font-size: 0.8rem;
  width: fit-content;

  &:hover {
    border: 1px solid #000;
  }

  &:first-child {
    margin-left: 0;
  }
`;

const Card = ({ repo }) => {
  const repoLink = `https://github.com/${repo.username}/${repo.repoName}`;

  return (
    <CardLayout>
      <Title>{repo.title}</Title>
      <Username>{repo.username}</Username>
      <Description text={repo.description} chars={100} />
      <Flex>
        {repo.tags && repo.tags.map((tag, id) => <Tag key={id}>{tag}</Tag>)}
      </Flex>
      <Flex>
        <Link target='_blank' href={repo.appLink}>
          App Link
        </Link>
        <Link target='_blank' href={repoLink}>
          Repo Link
        </Link>
      </Flex>
    </CardLayout>
  );
};

export default Card;
