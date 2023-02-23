import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LabeledText from './LabeledText';
import { format } from 'date-fns';
import { Button, styled } from '@mui/material';
import { Icon } from '@iconify/react';
import React from 'react';

interface InformationCardProps {
  info: LookupFormData & RequestFormData;
}
const RENT_TYPE_DISPLAY_TEXT: Record<RentType, string> = {
  MONTHLY: '월세',
  JEONSE: '전세',
};

const TIME_FORMAT = 'yyyy. MM. dd' as const;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 7px 2px rgba(180, 180, 180, 0.05);
`;

const InformationCard = ({
  info: {
    address,
    roomNumber,
    rentType,
    monthlyRent,
    deposit,
    maintenanceFee,
    monthlyRentPaymentDate,
    startAt,
    endAt,
    phoneNumber,
  },
}: InformationCardProps) => {
  return (
    <Card>
      <Typography
        variant="h5"
        padding="12px 10px"
        borderBottom="1px solid #F2F2F2"
        textAlign="center"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
      >
        🏠 {address || '-'}
        {roomNumber && ` ${roomNumber}호`}
      </Typography>

      <Box margin="12px 16px">
        <Box paddingBottom="12px" borderBottom="1px solid #F2F2F2">
          <Box display="flex">
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="임대유형"
              text={rentType ? RENT_TYPE_DISPLAY_TEXT[rentType] : '-'}
            />
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="월 임대료"
              text={monthlyRent ? `${monthlyRent.toLocaleString()}만원` : '-'}
            />
          </Box>

          <Box display="flex">
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="보증금"
              text={deposit ? `${deposit.toLocaleString()}만원` : '-'}
            />
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="월 관리비"
              text={
                maintenanceFee ? `${maintenanceFee.toLocaleString()}만원` : '-'
              }
            />
          </Box>

          <Box display="flex">
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="납부일"
              text={
                monthlyRentPaymentDate
                  ? `매달 ${monthlyRentPaymentDate.toLocaleString()}일`
                  : '-'
              }
            />
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              bold
              label="납부총액"
              text={`${(
                Number(monthlyRent) + Number(maintenanceFee)
              ).toLocaleString()}만원`}
            />
          </Box>
        </Box>
        {startAt && endAt && (
          <Box padding="16px 0px">
            <LabeledText
              label="계약기간"
              text={`${format(new Date(startAt), TIME_FORMAT)} ~ ${format(
                new Date(endAt),
                TIME_FORMAT
              )}`}
            />
          </Box>
        )}

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
            href={`sms:${phoneNumber}`}
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
    </Card>
  );
};

export default InformationCard;
