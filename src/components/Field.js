import React from 'react';
import styled from 'styled-components';

const Field = props => {
  const { keyName, value } = props;
  return (
    <div>
      <span>
        {keyName} :{' '}
        {keyName === 'appLink' ? <a href={value}>{value}</a> : value}
      </span>
    </div>
  );
};

export default Field;
