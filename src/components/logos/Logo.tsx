import ActivityLogo from './ActivityLogo';
import BinanceLogo from './BinanceLogo';
import BitcoinLogo from './BitcoinLogo';
import EtheriumLogo from './EtheriumLogo';
import ShibainuLogo from './ShibainuLogo';
import SolanaLogo from './SolanaLogo';
import { logos } from "../../constants/logo";
interface Props{
    logo : string;
    height : string;
}


export const Logo = ({logo, height} : Props)=> {
   let icon;
   switch (logo) {
      case logos.ACTIVITY_LOGO:
         icon = <ActivityLogo />
         break;
      case logos.BINANCE_LOGO:
         icon = <BinanceLogo height={height}/>
         break;
      case logos.BITCOIN_LOGO:
         icon = <BitcoinLogo height={height}/>
         break;
      case logos.ETHERIUM_LOGO:
         icon = <EtheriumLogo height={height}/>
         break;
      case logos.SHIBAINU_LOGO:
         icon = <ShibainuLogo height={height}/>
         break;
      case logos.SOLANA_LOGO:
         icon = <SolanaLogo height={height}/>
         break;
      default:
         break;
   }


   return (
      <div >
         {icon} 
      </div>
   );
}

export default Logo