import styled from "styled-components";
import { Box } from "@mui/material";

export const FavoritesListWrapper = styled(Box)`
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

export const FavoritesListTitle = styled.h4`
  margin: 0;
`;

export const FavoritesListEmptyTitle = styled(FavoritesListTitle)`
  font-size: 2.5rem;
`;

export const FavoritesListItemsWrapper = styled(Box)`
  margin-top: 2rem;
`;
