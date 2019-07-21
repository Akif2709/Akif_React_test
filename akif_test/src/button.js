import React from 'react';

const Button = props => {
  return (
    <div className="button_div">
      <button onClick={props.getUsers}> Get Users!</button>
    </div>
  );
};

export default Button;
