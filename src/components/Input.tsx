import React, { InputHTMLAttributes } from 'react';

import Search from '../assets/search.svg';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ name, type, ...rest }) => {
  return (
    <div className="input__container">
      <img className="input__icon" src={Search} alt="Search Icon" />
      <input className="input" name={name} type={type} {...rest} />
    </div>
  );
};

export default Input;
