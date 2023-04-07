import CardItem from "./CardItem/CardItem";
import { CardListWrapper } from "./CardList.styled";

const CardList = ({ tickers }) => {
    return (
        <CardListWrapper>
            {tickers.map(({ ticker, price, isPriceChanged }) => (
                <CardItem ticker={ticker} price={price} key={ticker} isPriceChanged={isPriceChanged} />
            ))}
        </CardListWrapper>
    );
};

export default CardList;
