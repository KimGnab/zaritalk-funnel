import React, { InputHTMLAttributes } from 'react';

import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LabeledInputProps {
  textAlign?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  startLabel?: string | React.ReactNode;
  endLabel?: string | React.ReactNode;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const StyledInput = styled('input')<{ textAlign?: string }>`
  &:focus {
    outline: none;
  }

  flex-grow: 1;
  ${({ textAlign }) => `text-align:${textAlign}`};
  width: 70%;
  font-size: 14px;
  font-weight: 500;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  padding: 0 2px 2px;
`;

const LabeledInput = ({
  textAlign,
  inputProps,
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
      <Typography variant="h4" color="#b4b4b4" position="absolute">
        {startLabel}
      </Typography>
    ) : (
      startLabel
    )}

    <StyledInput
      {...inputProps}
      textAlign={textAlign}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />

    {typeof endLabel === 'string' ? (
      <Typography variant="h4" color={disabled ? '#b4b4b4' : '#222222'}>
        {endLabel}
      </Typography>
    ) : (
      endLabel
    )}
  </Box>
);

export default LabeledInput;
