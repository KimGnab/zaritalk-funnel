import React, { useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { differenceInMonths } from 'date-fns';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RequestForm from './RequestForm';
import { getPayload } from '../../../utils/LocalStorageUtil';

function Highlight({ children }: React.PropsWithChildren<unknown>) {
  return (
    <Typography
      component="span"
      variant="inherit"
      sx={{ color: (theme) => theme.palette.primary.main }}
    >
      {children}
    </Typography>
  );
}

const StyledLink = styled(Link)`
  margin-top: 16px;

  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-decoration-line: underline;
  color: #7a7a7a;
`;

function RequestPage() {
  const navigate = useNavigate();
  const lookupData = getPayload();

  const getRefund = () => {
    if (!lookupData?.monthlyRent || lookupData?.rentType === 'JEONSE') return 0;
    const YEAR = 5;
    const TOTAL_MONTHS = YEAR * 12;
    const REFERENCE_DATE = new Date('2022-12-01');

    const after2023 = Math.max(
      0,
      differenceInMonths(new Date(), REFERENCE_DATE)
    );
    const monthlyRefund = Math.min(Number(lookupData.monthlyRent), 62.5);

    return Number(
      (
        monthlyRefund * 0.17 * after2023 +
        monthlyRefund * 0.12 * (TOTAL_MONTHS - after2023)
      ).toFixed(1)
    );
  };

  useEffect(() => {
    if (!lookupData) navigate('/lookup');
  }, [lookupData]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="32px 8px"
        bgcolor="#fff"
      >
        <Typography variant="h2">
          내 월세 환급금은 <Highlight>최대 {getRefund()}만원</Highlight>입니다.
        </Typography>
        <Typography variant="h2">자리톡으로 환급 신청하세요</Typography>

        <Box marginTop="8px" color="#B4B4B4">
          <Typography variant="subtitle2">
            해당 금액은 확정된 것이 아니며 세액공제 자격조건,
          </Typography>
          <Typography variant="subtitle2">
            세금납부 및 공제이력에 따라 변동될 수 있습니다.
          </Typography>
        </Box>

        <StyledLink to="/lookup">임대비용 수정하기</StyledLink>
      </Box>

      <RequestForm />
    </>
  );
}

export default RequestPage;
