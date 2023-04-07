import { Box } from '@mui/material';
import StyledButton from './AddToFavorites.styled';

const AddToFavorites = ({ handleAddToFavorites, handleRemoveFromFavorites, isFavorite }) => {
    return (
        <Box>
            <StyledButton variant='contained' onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites} disabled={isFavorite}>
                {isFavorite ? 'Remove ' : 'Favorites'}
            </StyledButton>
        </Box>
    );
};

export default AddToFavorites;
