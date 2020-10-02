import React, { useState } from 'react';

const Input = ({ initialValue, onChange, ...rest }) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = ({ target }) => {
    setValue(target.value);
    onChange(target.value);
  };

  return <input {...rest} value={value} onChange={handleChange} />;
};
export default Input;
