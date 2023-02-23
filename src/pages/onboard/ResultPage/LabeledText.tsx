import React from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LabeledText = ({
  label,
  text,
  bold,
  sx,
}: {
  label: string;
  text: string;
  bold?: boolean;
  sx?: BoxProps['sx'];
}) => (
  <Box display="flex" alignItems="center" sx={sx} gap="8px">
    <Typography color="#b4b4b4" variant="h5">
      {label}
    </Typography>
    <Typography color="#222222" variant={bold ? 'h5' : 'subtitle1'}>
      {text}
    </Typography>
  </Box>
);

export default LabeledText;
