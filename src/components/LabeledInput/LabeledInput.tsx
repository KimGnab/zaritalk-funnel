import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import { styled } from '@mui/material';

interface LabeledInputProps {
  startLabel?: string | React.ReactNode;
  endLabel?: string | React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const StyledInput = styled('input')`
  &:focus {
    outline: none;
  }

  flex-grow: 1;
  text-align: right;
  width: 70%;
  font-size: 14px;
  font-weight: 500;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  padding: 0 2px 2px;
`;

const LabeledInput = ({
  startLabel,
  endLabel,
  value,
  onChange,
  disabled,
}: LabeledInputProps) => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    padding="0px 12px"
    justifyContent="space-between"
    {...(disabled && { sx: { background: '#f2f2f2' } })}
  >
    {typeof startLabel === 'string' ? (
      <Typography variant="subtitle2" color="#b4b4b4" position="absolute">
        {startLabel}
      </Typography>
    ) : (
      startLabel
    )}

    <StyledInput value={value} onChange={onChange} disabled={disabled} />

    {typeof endLabel === 'string' ? (
      <Typography variant="subtitle2" color={disabled ? '#b4b4b4' : '#222222'}>
        {endLabel}
      </Typography>
    ) : (
      endLabel
    )}
  </Box>
);

export default LabeledInput;
