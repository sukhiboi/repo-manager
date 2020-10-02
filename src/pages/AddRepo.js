import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from './../components/Form';

const AddRepo = Component => {
  const history = useHistory();

  return (
    <div>
      <Form onSubmit={() => history.push('/')} />
    </div>
  );
};

export default AddRepo;
