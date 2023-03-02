import CurrencyCard from "../components/cards/currency-card/CurrencyCard";
import "./currency-card-container.css";
import { logos } from "../constants/logo";
import { currencyNames } from "../constants/currency";

export const CurrencyCardContainer: React.FC = () => {
    return (
    <div className="trending__currency">
        <CurrencyCard logo = {logos.BITCOIN_LOGO} cardName={currencyNames.BITCOIN} price={"31,812.80"} changeInPrice={"10"} isPositive={true}/>
        <CurrencyCard logo = {logos.SOLANA_LOGO} cardName={currencyNames.SOLANA} price={"32.83"} changeInPrice={"12.32"}/>
        <CurrencyCard logo = {logos.ETHERIUM_LOGO} cardName={currencyNames.ETHEREUM} price={"1466.45"} changeInPrice={"11.93"}/>
        <CurrencyCard logo = {logos.BINANCE_LOGO} cardName={currencyNames.BINANCECOIN} price={"1.00"} changeInPrice={"0.26"} isPositive={true} />
        <CurrencyCard logo = {logos.SHIBAINU_LOGO} cardName={currencyNames.SHIBAINU} changeInPrice={"8.1"} price={"0.00000001948"}/>
    </div>
    );
}

export default CurrencyCardContainer