import React, { useState } from 'react';

const TimePicker = ({ value, onChange }) => {
  const [time, setTime] = useState(value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime(value);
    onChange(name, value);
  };

  return ( 
    <input className='bg-neutral-300'
      type="time"
      name="time"
      value={time}
      onChange={handleChange}
    />
  );
};

export default TimePicker;