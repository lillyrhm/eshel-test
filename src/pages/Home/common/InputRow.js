import React from 'react';
// import { Card, Input, Txt } from 'components';
// import { InpTypes } from 'types';

export default function InputRow(props) {
  const { onChange, title, type, name } = props;

  return (
    <div className="d-flex align-items-center w-100 mt-2">
      <div
        height="40px"
        width="35%"
        bgColor="BLOCK_BG"
        className="d-flex justify-content-start align-items-center pr-1"
      >
        <txt numberOfLines="1" className="d-block text-nowrap" size="xs">
          {title}
        </txt>
      </div>
      <div height="40px" width="65%" bgColor="INPUT_BG">
        <input
          name={name}
          type={type || 'text'}
          onChange={onChange}
          placeholder={title}
          wrapperClassName="w-100 h-100 d-flex align-items-center"
          className="p-1 w-100 h-100"
        />
      </div>
    </div>
  );
}