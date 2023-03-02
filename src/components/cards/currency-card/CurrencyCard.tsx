import './currency-card.css'
import Logo from '../../logos/Logo';
import { logos } from "../../../constants/logo";
interface Props {
    logo : string;
    cardName : string;
    price: string;
    changeInPrice: string;
    isPositive? : boolean;
}

export const CurrencyCard = ({logo,cardName, price, changeInPrice, isPositive=false} : Props) => {
    return (
    <div className="card">
         <div className="card__logo">
                <Logo logo={logo} height=""/>
         </div>
         <div className="card__body">
 
            <div className="card__heading">
                {cardName}
            </div>
            <div className="card__price">
                <span className='card__price--price'>${price}</span>
                <span className={`card__change-in-price ${isPositive ? "positive": "negative"}`}>{`${isPositive? "+" : "-" } ${changeInPrice}%`} </span>
            </div>
            <div className="card__heading2">
                Price
            </div>
            <div className="card__price margin-none">
                $60,000
            </div>
            <div className="card__heading2 padding-tb-1">
                TVL
            </div>
            <div className="card__currency-group">
                <Logo logo={logos.SOLANA_LOGO}  height="30" />
                <Logo logo={logos.ETHERIUM_LOGO}  height="35"/>
                <Logo logo={logos.BINANCE_LOGO}  height="28"/>
            </div>
            <div className="card__heading2">
                Popular pairs
            </div>
        </div>
    </div>
    );
}

export default CurrencyCard;