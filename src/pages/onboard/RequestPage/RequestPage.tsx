import React, { useEffect } from 'react';

import { Icon } from '@iconify/react';
import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { getPayload } from '../../../utils/LocalStorageUtil';
import Section from '../../../components/Section';
import BoxGroup from '../../../components/BoxGroup';
import LabeledInput from '../../../components/LabeledInput';

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

  const handleAddressClick = () => {
    window.alert('address modal!');
  };

  useEffect(() => {
    console.log(lookupData);
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
          내 월세 환급금은 <Highlight>최대 360만원</Highlight>입니다.
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

      <Box padding="0 16px" marginTop="25px">
        <Section title="거주 건물">
          <BoxGroup onClick={handleAddressClick}>
            <LabeledInput
              inputProps={{
                placeholder: '살고 계신 건물주소 또는 건물명을 입력하세요.',
                readOnly: true,
              }}
              endLabel={
                <Icon
                  icon="ic:baseline-search"
                  fontSize="18px"
                  color="#b4b4b4"
                />
              }
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
          <LabeledInput inputProps={{ placeholder: '예) 101' }} endLabel="호" />
          <LabeledInput inputProps={{ placeholder: '예) 홍길동' }} />
        </BoxGroup>

        <Box marginTop="24px" display="flex" flexDirection="row">
          <Section sx={{ flex: 1 }} title="계약시작일" />
          <Section sx={{ flex: 1 }} title="계약종료일" />
        </Box>

        <BoxGroup>
          <LabeledInput
            inputProps={{ placeholder: '선택해주세요', readOnly: true }}
            endLabel={
              <Icon
                icon="ic:round-keyboard-arrow-right"
                fontSize="16px"
                color="#222222"
              />
            }
          />
          <LabeledInput
            inputProps={{ placeholder: '선택해주세요', readOnly: true }}
            endLabel={
              <Icon
                icon="ic:round-keyboard-arrow-right"
                fontSize="16px"
                color="#222222"
              />
            }
          />
        </BoxGroup>

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

        <Section sx={{ marginTop: '24px' }} title="임대인 휴대폰 번호">
          <BoxGroup>
            <LabeledInput
              inputProps={{
                placeholder: '임대인(현재 집주인) 휴대폰 번호를 입력해주세요.',
              }}
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
      </Box>
    </>
  );
}

export default RequestPage;
