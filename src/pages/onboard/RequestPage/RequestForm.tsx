import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';

import { styled } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Section from '../../../components/Section';
import BoxGroup from '../../../components/BoxGroup';
import LabeledInput from '../../../components/LabeledInput';

import { updatePayload as fakeUpdateRequest } from '../../../utils/LocalStorageUtil';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root fieldset': {
    border: 0,
  },
});

interface RequestFormData {
  address?: string;
  roomNumber?: string;
  name?: string;
  startAt: string;
  endAt: string;
  phoneNumber?: string;
}

const getMissingFields = (data: RequestFormData) => {
  const missingFields: string[] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (!value) {
      missingFields.push(key);
    }
  });

  return missingFields;
};

const RequestForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm<RequestFormData>({
    defaultValues: {
      address: '',
      roomNumber: '',
      name: '',
      phoneNumber: '',
    },
  });

  const watchAddress = watch('address');
  const watchName = watch('name');
  const watchRoomNumber = watch('roomNumber');

  const watchStartAt = watch('startAt');
  const watchEndAt = watch('endAt');

  const onSubmit: SubmitHandler<RequestFormData> = async (data) => {
    const missingFields = getMissingFields(data);
    if (missingFields.length > 0) {
      window.alert(missingFields.join());
    } else {
      // TODO: 실제 서버에 저장하도록 변경
      const response = await fakeUpdateRequest(data);
      if (response) {
        navigate('/result');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box padding="0 16px" marginTop="25px">
        <Section title="거주 건물">
          <BoxGroup>
            <Controller
              control={control}
              name="address"
              render={({ field: { value, onChange } }) => (
                <LabeledInput
                  value={value}
                  onChange={onChange}
                  inputProps={{
                    maxLength: 30,
                    placeholder: '살고 계신 건물주소 또는 건물명을 입력하세요.',
                  }}
                  endLabel={
                    <Icon
                      icon="ic:baseline-search"
                      fontSize="18px"
                      color="#b4b4b4"
                    />
                  }
                />
              )}
            />
          </BoxGroup>
          <Box marginTop="8px" display="flex" gap="4px" color="#7A7A7A">
            <Icon
              icon="pepicons-pop:info-filled"
              fontSize="16px"
              color="#7a7a7a"
            />
            <Typography variant="caption">
              과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도
              현재 거주지를 입력해야 합니다.)
            </Typography>
          </Box>
        </Section>

        <Box marginTop="24px" display="flex" flexDirection="row">
          <Section sx={{ flex: 1 }} title="호실" />
          <Section sx={{ flex: 1 }} title="세입자(본인) 이름" />
        </Box>

        <BoxGroup>
          <Controller
            control={control}
            name="roomNumber"
            render={({ field: { value, onChange } }) => (
              <LabeledInput
                value={value}
                onChange={onChange}
                inputProps={{ placeholder: '예) 101', maxLength: 20 }}
                endLabel="호"
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <LabeledInput
                value={value}
                onChange={onChange}
                inputProps={{ placeholder: '예) 홍길동', maxLength: 20 }}
              />
            )}
          />
        </BoxGroup>

        {!!watchAddress && !!watchRoomNumber && !!watchName && (
          <>
            <Box marginTop="24px" display="flex" flexDirection="row">
              <Section sx={{ flex: 1 }} title="계약시작일" />
              <Section sx={{ flex: 1 }} title="계약종료일" />
            </Box>

            <BoxGroup>
              <Controller
                name="startAt"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <MobileDatePicker
                    closeOnSelect
                    value={value}
                    onChange={onChange}
                    inputFormat="yyyy-MM-dd"
                    renderInput={(params) => (
                      <StyledTextField
                        placeholder="선택해 주세요"
                        {...params}
                        error={false}
                      />
                    )}
                  />
                )}
              />

              <Controller
                name="endAt"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <MobileDatePicker
                    closeOnSelect
                    value={value}
                    onChange={onChange}
                    inputFormat="yyyy-MM-dd"
                    renderInput={(params) => (
                      <StyledTextField
                        placeholder="선택해주세요"
                        {...params}
                        error={false}
                      />
                    )}
                  />
                )}
              />
            </BoxGroup>
          </>
        )}

        <Box marginTop="8px" display="flex" gap="4px" color="#7A7A7A">
          <Icon
            icon="pepicons-pop:info-filled"
            fontSize="16px"
            color="#7a7a7a"
          />
          <Typography variant="caption">
            정확히 모를 경우 임의로 작성 후 수정요청 하세요.
          </Typography>
        </Box>

        {!!watchStartAt && !!watchEndAt && (
          <>
            <Section sx={{ marginTop: '24px' }} title="임대인 휴대폰 번호">
              <BoxGroup>
                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field: { value, onChange } }) => (
                    <LabeledInput
                      inputProps={{
                        inputMode: 'tel',
                        maxLength: 11,
                      }}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </BoxGroup>
              <Box marginTop="8px" display="flex" gap="4px" color="#7A7A7A">
                <Icon
                  icon="pepicons-pop:info-filled"
                  fontSize="16px"
                  color="#7a7a7a"
                />
                <Typography variant="caption">
                  임대인(현재 집주인) 번호가 아닐 경우 월세환급 기회가 박탈될 수
                  있습니다.
                </Typography>
              </Box>
            </Section>

            <Typography
              marginTop="24px"
              display="flex"
              justifyContent="center"
              variant="caption"
              color="#7a7a7a"
            >
              세계 최고 AWS 보안으로 모든 정보는 안전하게 보호됩니다.
            </Typography>

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                marginTop: '12px',
                width: '100%',
                height: '48px',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '8px',
              }}
            >
              완료
            </Button>
          </>
        )}
      </Box>
    </form>
  );
};

export default RequestForm;
