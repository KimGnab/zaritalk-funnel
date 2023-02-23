import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LookupForm from './LookupForm';

function LookupPage() {
  return (
    <Box padding="0 16px" marginTop="40px">
      <Typography variant="h3">전월세 비용을 입력하시면</Typography>
      <Typography variant="h3">내 월세 환급금을 알려드려요 👇</Typography>
      <LookupForm />
    </Box>
  );
}

export default LookupPage;
