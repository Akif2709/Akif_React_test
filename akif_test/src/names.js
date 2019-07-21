import React from 'react';
const NameLi = ({ name, showDetail }) => {
  return <li onClick={showDetail}>{name}</li>;
};

const NameUl = ({ data, showDetail }) => {
  return (
    <ul className="firstList">
      {' '}
      {data &&
        data.map(({ name }, index) => (
          <NameLi showDetail={() => showDetail(index)} key={index} name={name} />
        ))}{' '}
    </ul>
  );
};

export default NameUl;
