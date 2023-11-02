import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes({label}) {
  return (
    <div>
      <Checkbox {...label}/>
      <label htmlFor=''>{label}</label>
    </div>
  );
}