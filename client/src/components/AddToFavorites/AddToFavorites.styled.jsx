import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    && {
        width: 20px;
        font-size: 11px;
        font-weight: 600;
        background-color: ${props => props.isFavorite ? '#ff5252' : '#2196f3'};
        color: #fff;
        &:hover {
            background-color: ${props => props.isFavorite ? '#ff1744' : '#1976d2'};
        }
    }
`;

export default StyledButton;
