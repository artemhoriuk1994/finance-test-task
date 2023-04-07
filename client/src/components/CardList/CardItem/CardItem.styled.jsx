import styled from 'styled-components';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';

export const StyledCard = styled(Card)`
  width: 150px;
  background-color: ${({ isPriceChanged }) =>
        isPriceChanged ? '#A5D6A766' : '#FF8A8066'};
`;

export const StyledCardHeader = styled(CardHeader)`
  font-size: 14px;
  font-weight: 600;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const StyledTypography = styled(Typography)`
  font-size: 24px;
  margin: 1px;
`;

export const StyledUpArrowIcon = styled(BsGraphUpArrow)`
  font-size: 24px;
  color: #a5d6a7;
`;

export const StyledDownArrowIcon = styled(BsGraphDownArrow)`
  font-size: 24px;
  color: #ff8a80;
`;
