import React from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LookupForm from './LookupForm';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function LookupPage() {
  return (
    <Container>
      <Box marginTop="40px">
        <Typography variant="h3">전월세 비용을 입력하시면</Typography>
        <Typography variant="h3">내 월세 환급금을 알려드려요 👇</Typography>
      </Box>
      <LookupForm />
    </Container>
  );
}

export default LookupPage;
