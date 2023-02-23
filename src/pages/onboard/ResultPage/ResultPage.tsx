import Box from '@mui/material/Box';
import React, { useEffect } from 'react';

import { getPayload } from '../../../utils/LocalStorageUtil';
import { useNavigate } from 'react-router-dom';
import InformationCard from './InformationCard';

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
