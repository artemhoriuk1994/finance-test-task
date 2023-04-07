import { StyledButton, StyledListItem, StyledTypography } from "./FavoriteItem.styled";

const FavoriteItem = ({ favorite, handleRemoveFromFavorites }) => {
    return (
        <StyledListItem>
            <StyledTypography variant='subtitle1' width={4}>{favorite}</StyledTypography>
            <StyledButton variant="contained" onClick={handleRemoveFromFavorites}>Remove</StyledButton>
        </StyledListItem>
    );
};

export default FavoriteItem;
