import React from 'react';

const Field = props => {
  const { keyName, value } = props;
  return (
    <div>
      <span>
        {keyName} : {keyName === 'appLink' ? <a href={value}>{value}</a> : value}
      </span>
    </div>
  );
};

const Card = props => {
  const keys = Object.keys(props.repo);
  const fields = keys.map((key, idx) => (
    <Field key={idx} keyName={key} value={props.repo[key]} />
  ));
  return (
    <div>
      {fields}
      <hr />
    </div>
  );
};

export default Card;
