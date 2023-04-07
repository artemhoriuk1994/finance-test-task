import React, { useState, useEffect } from "react";
import { Paper, TableRow, TableCell, TableHead, TableBody, } from "@mui/material"
import FavoritesList from "../AddToFavorites/FavoritesList/FavoritesList";
import TableRows from "./TableRow/TableRow";
import { columns } from "./options/columns";
import { StyledTable, StyledTableContainer, Wrapper } from "./TableBodyData.styled";


const TableBodyData = ({ tickers }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
        return []
    }, []);

    const handleAddToFavorites = (favorite) => {
        if (favorites.includes(favorite)) return;
        const updatedFavorites = [...favorites, favorite];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    const handleRemoveFromFavorites = (favoriteToRemove) => {
        const removed = favorites.filter((f) => favoriteToRemove !== f);
        localStorage.setItem('favorites', JSON.stringify(removed));
        setFavorites(removed);
    };

    const isFavorite = favorites.some((f) => f.ticker === f);

    return (
        <Wrapper>
            <StyledTableContainer component={Paper}>
                <StyledTable aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => {
                                return (
                                    <TableCell key={index}>{column}</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRows tickers={tickers} isFavorite={isFavorite} handleAddToFavorites={handleAddToFavorites} />
                    </TableBody>
                </StyledTable>
            </StyledTableContainer>
            <FavoritesList favorites={favorites} handleRemoveFromFavorites={handleRemoveFromFavorites} />
        </Wrapper>
    );
};

export default TableBodyData;
