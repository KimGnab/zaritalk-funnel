import React, { PropsWithChildren } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionProps extends PropsWithChildren {
  title: string;
  sx?: BoxProps['sx'];
}

const Section = ({ title, children, sx }: SectionProps) => (
  <Box sx={sx}>
    <Typography variant="h4" marginBottom="8px">
      {title}
    </Typography>
    {children}
  </Box>
);

export default Section;
