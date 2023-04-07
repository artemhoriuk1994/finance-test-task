import React from 'react';
import {
    StyledCard,
    StyledCardHeader,
    StyledCardContent,
    StyledTypography,
    StyledUpArrowIcon,
    StyledDownArrowIcon,
} from './CardItem.styled';

const CardItem = ({ ticker, price, isPriceChanged }) => {

    return (
        <StyledCard key={ticker} isPriceChanged={isPriceChanged}>
            <StyledCardHeader title={ticker} />
            <StyledCardContent>
                <StyledTypography>{price}</StyledTypography>
                {isPriceChanged ? <StyledUpArrowIcon /> : <StyledDownArrowIcon />}
            </StyledCardContent>
        </StyledCard>
    );
};

export default CardItem;
