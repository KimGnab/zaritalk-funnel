import React from 'react';

import { format } from 'date-fns';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LabeledText from './LabeledText';

interface InformationCardProps {
  info: LookupFormData & RequestFormData;
}
const RENT_TYPE_DISPLAY_TEXT: Record<RentType, string> = {
  MONTHLY: 'μμΈ',
  JEONSE: 'μ μΈ',
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
        π  {address || '-'}
        {roomNumber && ` ${roomNumber}νΈ`}
      </Typography>

      <Box margin="12px 16px">
        <Box paddingBottom="12px" borderBottom="1px solid #F2F2F2">
          <Box display="flex">
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="μλμ ν"
              text={rentType ? RENT_TYPE_DISPLAY_TEXT[rentType] : '-'}
            />
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="μ μλλ£"
              text={monthlyRent ? `${monthlyRent.toLocaleString()}λ§μ` : '-'}
            />
          </Box>

          <Box display="flex">
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="λ³΄μ¦κΈ"
              text={deposit ? `${deposit.toLocaleString()}λ§μ` : '-'}
            />
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="μ κ΄λ¦¬λΉ"
              text={
                maintenanceFee ? `${maintenanceFee.toLocaleString()}λ§μ` : '-'
              }
            />
          </Box>

          <Box display="flex">
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              label="λ©λΆμΌ"
              text={
                monthlyRentPaymentDate
                  ? `λ§€λ¬ ${monthlyRentPaymentDate.toLocaleString()}μΌ`
                  : '-'
              }
            />
            <LabeledText
              sx={{ flex: 1, '.MuiTypography-root': { flex: 1 } }}
              bold
              label="λ©λΆμ΄μ‘"
              text={`${(
                Number(monthlyRent) + Number(maintenanceFee)
              ).toLocaleString()}λ§μ`}
            />
          </Box>
        </Box>
        {startAt && endAt && (
          <Box padding="16px 0px">
            <LabeledText
              label="κ³μ½κΈ°κ°"
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
            μλμΈ λ¬Έμ
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
            μλμΈ μ ν
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default InformationCard;
