import { useState } from 'react';
import { TextField } from '@mui/material';
import { Grid } from '../Grid/Grid';
import './GridContainer.css';

export function GridContainer() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const handleInputChange = (value: string) => {
    if (value) {
      if (parseInt(value) > 500) {
        return 500;
      }
      return parseInt(value);
    } else {
      return 0;
    }
  };

  return (
    <div>
      <div className="TextFieldContainer">
        <div className="TextField">
          <TextField
            id="filled-number"
            label="Width"
            type="number"
            variant="filled"
            value={width}
            onChange={(e) => {
              setWidth(handleInputChange(e.target.value));
            }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </div>
        <div className="TextField">
          <TextField
            id="filled-number"
            label="Height"
            type="number"
            variant="filled"
            value={height}
            onChange={(e) => {
              setHeight(handleInputChange(e.target.value));
            }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </div>
      </div>
      <Grid width={width} height={height} />
    </div>
  );
}
