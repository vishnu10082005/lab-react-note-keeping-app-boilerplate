import React, { useState } from 'react';
import '../../App.css';
const Note = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='main'>
      <div className="WriteNote">
        <input type="text" value={value} onChange={handleChange} /> 
        {/* <h3>Input</h3> */}
        </div>
      <div className="GetNotes">
        <h3>Pro Note</h3>
        <div className="output-text">{value}</div>
      </div>

    </div>
  );
};

export default Note;
