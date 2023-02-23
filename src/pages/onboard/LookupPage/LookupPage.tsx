import React, { useEffect, useState } from 'react';

import { Button, Checkbox, FormControlLabel, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Section from '../../../components/Section';
import { Icon } from '@iconify/react';
import LabeledInput from '../../../components/LabeledInput';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: '#222222',
  backgroundColor: '#fff',
  height: '44px',
  border: '1px solid #E8E8E8',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    borderColor: '#E8E8E8',
  },
}));

const BoxGroup = styled(Box)<{ start?: string; end?: string }>`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  div {
    flex: 1;
    border: 1px solid #e8e8e8;
    height: 46px;
  }

  div:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  div:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

function LookupPage() {
  const { control, handleSubmit, watch, setValue } = useForm();

  const watchRentType = watch('rentType');
  const watchCheckMaintenanceFee = watch('checkMaintenanceFee');

  const onSubmit: SubmitHandler<{
    rentType?: 'MONTHLY' | 'JEONSE';
    deposit?: number;
    monthlyRent?: number;
    maintenanceFee?: number;
    monthlyRentPaymentDate?: number;
    checkMaintenanceFee?: boolean;
  }> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (watchCheckMaintenanceFee) {
      setValue('maintenanceFee', 0);
      setValue('monthlyRentPaymentDate', '');
    }
  }, [watchCheckMaintenanceFee]);

  return (
    <Container>
      <Box marginTop="40px">
        <Typography variant="h3">전월세 비용을 입력하시면</Typography>
        <Typography variant="h3">내 월세 환급금을 알려드려요 👇</Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Section title="임대 유형" sx={{ marginTop: '50px' }}>
          <Controller
            control={control}
            name="rentType"
            render={({ field }) => (
              <ToggleButtonGroup
                fullWidth
                exclusive
                aria-label="임대 유형"
                {...field}
              >
                <StyledToggleButton value="MONTHLY">월세</StyledToggleButton>
                <StyledToggleButton value="JEONSE">전세</StyledToggleButton>
              </ToggleButtonGroup>
            )}
          />
        </Section>

        {watchRentType && (
          <>
            <Section title="임대비용" sx={{ marginTop: '50px' }}>
              <Box display="flex" gap="4px" color="#7A7A7A">
                <Icon
                  icon="pepicons-pop:info-filled"
                  fontSize="16px"
                  color="#7a7a7a"
                />
                <Typography variant="caption">
                  천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.
                </Typography>
              </Box>

              <Box display="flex" gap="4px" color="#7A7A7A">
                <Icon
                  icon="pepicons-pop:info-filled"
                  fontSize="16px"
                  color="#7a7a7a"
                />
                <Typography variant="caption">
                  비용 입력시 고지서가 무료로 제공됩니다.
                </Typography>
              </Box>

              <BoxGroup marginTop="12px">
                <Controller
                  control={control}
                  name="deposit"
                  render={({ field: { value, onChange } }) => (
                    <LabeledInput
                      value={value}
                      onChange={onChange}
                      startLabel="보증금"
                      endLabel="만원"
                    />
                  )}
                />

                {watchRentType === 'MONTHLY' && (
                  <Controller
                    control={control}
                    name="monthlyRent"
                    render={({ field: { value, onChange } }) => (
                      <LabeledInput
                        value={value}
                        onChange={onChange}
                        startLabel="월 임대료"
                        endLabel="만원"
                      />
                    )}
                  />
                )}
              </BoxGroup>
              <BoxGroup marginTop="12px">
                <Controller
                  control={control}
                  name="maintenanceFee"
                  render={({ field: { value, onChange } }) => (
                    <LabeledInput
                      value={value}
                      onChange={onChange}
                      startLabel="월 관리비"
                      endLabel="만원"
                      disabled={watchCheckMaintenanceFee}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="monthlyRentPaymentDate"
                  render={({ field: { value, onChange } }) => (
                    <LabeledInput
                      value={value}
                      onChange={onChange}
                      startLabel="임대료 납부일"
                      endLabel="일"
                      disabled={
                        watchCheckMaintenanceFee && watchRentType === 'JEONSE'
                      }
                    />
                  )}
                />
              </BoxGroup>
              <Controller
                control={control}
                name="checkMaintenanceFee"
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    sx={{ marginTop: '5px' }}
                    control={<Checkbox {...field} />}
                    label={
                      <Typography
                        variant="subtitle1"
                        {...(field.value && {
                          color: 'primary',
                          fontWeight: '700',
                        })}
                      >
                        관리비는 관리실에 따로 납부하거나 없습니다.
                      </Typography>
                    }
                  />
                )}
              />
            </Section>

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                marginTop: '30px',
                width: '100%',
                height: '50px',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '8px',
              }}
            >
              금액 확인하기 👆️
            </Button>
          </>
        )}
      </form>
    </Container>
  );
}

export default LookupPage;
