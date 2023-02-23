import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import InformationCard from './InformationCard';
import { getPayload } from '../../../utils/LocalStorageUtil';

function resultPage() {
  const navigate = useNavigate();
  const response = getPayload();

  useEffect(() => {
    if (!response) navigate('/lookup');
  }, [response]);

  return (
    <Box padding="0 16px" marginTop="20px">
      {response && <InformationCard info={response} />}
    </Box>
  );
}

export default resultPage;
