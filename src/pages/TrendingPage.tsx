import CurrencyCardContainer from "../containers/CurrencyCardContainer";
import {logos} from "../constants/logo";
import PageName from "../components/PageName/PageName";
import "./trending-page.css";
export const TrendingPage: React.FC = () => {
    return (
        <div className="trending-page">
        <PageName logo={logos.ACTIVITY_LOGO} pageName="Trending Assets"/>
        <CurrencyCardContainer/>
        </div>
        );
}

export default TrendingPage;