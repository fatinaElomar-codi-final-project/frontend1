import React from 'react';
import { SvgIcon } from '@mui/material';

const FoodIcon = (props) => {
  return (
    <SvgIcon {...props}>
      {/* Replace the path below with the actual SVG path for your food icon */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 18h-2v-2h2v2zm0-4h-2v-6h2v6zm0-8h-2V7h2v1zm5 8h-3V9h3v7zm0-9h-3V5h3v1z" />
    </SvgIcon>
  );
};

export default FoodIcon;
