import React from 'react';
import { useParams } from 'react-router-dom';

const Method = () => {
  const { methodName } = useParams();

  return (
    <section>
      <h2>{methodName}</h2>
      <a
        href={`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/${methodName}`}
        target="blank"
      >
        MDN Documentation
      </a>
    </section>
  );
};

export default Method;
