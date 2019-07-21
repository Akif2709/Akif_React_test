import React from 'react';

const detailedList = props => {
  console.log(props);
  const { photo, name, surname, email, gender, age, region } = props.data;
  return (
    <div className="container">
      <img src={photo} alt={name} />
      <div>
        {' '}
        <ul>
          <li>
            {name} {surname}
          </li>
          <li>Email: {email}</li>
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>
          <li>Country of Origin: {region}</li>
        </ul>{' '}
      </div>
    </div>
  );
};

export default detailedList;
