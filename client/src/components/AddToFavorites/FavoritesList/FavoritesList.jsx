import { List } from "@mui/material";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import {
    FavoritesListWrapper,
    FavoritesListTitle,
    FavoritesListEmptyTitle,
    FavoritesListItemsWrapper,
} from "./FavoriteList.styled";


const FavoritesList = ({ favorites, handleRemoveFromFavorites }) => {
    return (
        <FavoritesListWrapper>
            {favorites.length === 0 ?
                (<FavoritesListEmptyTitle>Add your first favorite ticker</FavoritesListEmptyTitle>)
                : (<FavoritesListTitle>Your Favorites Tickers</FavoritesListTitle>)}
            <FavoritesListItemsWrapper>
                <List>
                    {favorites.map((favorite, index) => (
                        <FavoriteItem key={index} favorite={favorite} handleRemoveFromFavorites={() => handleRemoveFromFavorites(favorite)} />
                    ))}
                </List>
            </FavoritesListItemsWrapper>
        </FavoritesListWrapper>
    );
};

export default FavoritesList;
