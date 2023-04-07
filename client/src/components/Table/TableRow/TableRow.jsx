import React from "react";
import { Paper, TableCell, TableRow } from "@mui/material";
import AddToFavorites from "../../AddToFavorites/AddToFavorites";
import { colorsGenerator } from "../../../helper/colorGenerator";
import { TableCellStyle } from "./TableRow.styled";

const TableRows = ({ tickers, isFavorite, handleAddToFavorites, handleRemoveFromFavorites }) => {
    const colors = colorsGenerator();

    return (
        <>
            {tickers.map(({ price, ticker, company_name, change, change_percent, isPriceChanged }, index) => {
                const bgColor = isPriceChanged ? { backgroundColor: '#A5D6A766' } : { backgroundColor: '#FF8A8066' };

                return (
                    <TableRow key={ticker}>
                        <TableCellStyle>
                            <Paper sx={{ backgroundColor: colors[index], width: 0.5, textAlign: 'center' }}>{ticker}</Paper>
                        </TableCellStyle>
                        <TableCell>{company_name}</TableCell>
                        <TableCell>{price}</TableCell>
                        <TableCellStyle>
                            <Paper sx={{ ...bgColor, width: 0.5, textAlign: 'center' }}>{change}</Paper>
                        </TableCellStyle>
                        <TableCellStyle>
                            <Paper sx={{ ...bgColor, width: 0.5, textAlign: 'center' }}>{change_percent}</Paper>
                        </TableCellStyle>
                        <TableCell>
                            <AddToFavorites
                                favorite={company_name}
                                handleAddToFavorites={() => handleAddToFavorites(company_name)}
                                handleRemoveFromFavorites={() => handleRemoveFromFavorites(company_name)}
                                isFavorite={isFavorite} />
                        </TableCell>
                    </TableRow>
                );
            })}
        </>
    );
};

export default TableRows;
