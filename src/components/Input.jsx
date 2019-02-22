import React from 'react';

export default function Input({ value, onChange = Function.prototype }) {
  return <input type="text" value={value} onChange={event => onChange(event, event.target.value)} />;
}
