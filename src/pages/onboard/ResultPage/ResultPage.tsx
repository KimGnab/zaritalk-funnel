import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import React from 'react';
import { Button } from '@mui/material';
import { Icon } from '@iconify/react';

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

function resultPage() {
  return (
    <Box padding="0 16px" marginTop="20px">
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="#fff"
        borderRadius="6px"
        boxShadow="0px 0px 7px 2px rgba(180, 180, 180, 0.05)"
      >
        <Typography
          variant="h5"
          padding="12px 10px"
          borderBottom="1px solid #F2F2F2"
          textAlign="center"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          🏠 서울 에듀 포레스트 힐스이트 아파트 100동 1123123123123
        </Typography>

        <Box margin="12px 16px">
          <Box paddingBottom="12px" borderBottom="1px solid #F2F2F2">
            <Box display="flex">
              <LabeledText
                sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
                label="임대유형"
                text="월세"
              />
              <LabeledText
                sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
                label="월 임대료"
                text="105만원"
              />
            </Box>

            <Box display="flex">
              <LabeledText
                sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
                label="보증금"
                text="3,000만원"
              />
              <LabeledText
                sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
                label="월 관리비"
                text="10만원"
              />
            </Box>

            <Box display="flex">
              <LabeledText
                sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
                label="납부일"
                text="매달 15일"
              />
              <LabeledText
                sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
                bold
                label="납부총액"
                text="115만원"
              />
            </Box>
          </Box>
          <Box padding="16px 0px">
            <LabeledText label="계약기간" text="2020. 03. 01 ~ 2022. 02. 28" />
          </Box>

          <Box display="flex" gap="8px">
            <Button
              sx={{
                flex: 1,
                color: '#7a7a7a',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '23px',
                borderColor: '#c8c8c8',
              }}
              startIcon={<Icon icon="fluent:mail-16-filled" />}
              variant="outlined"
              href="sms:01040178207"
            >
              임대인 문자
            </Button>
            <Button
              sx={{
                flex: 1,
                color: '#7a7a7a',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '23px',
                borderColor: '#c8c8c8',
                height: '47px',
                borderRadius: '8px',
              }}
              href="tel:01040178207"
              startIcon={<Icon icon="basil:phone-solid" />}
              variant="outlined"
            >
              임대인 전화
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default resultPage;
