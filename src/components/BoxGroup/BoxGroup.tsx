import { styled } from '@mui/material';
import Box from '@mui/material/Box';

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

export default BoxGroup;
