import Logo from "../logos/Logo";
import "./page-name.css";
interface Props  {
    logo : string;
    pageName : string;
}
export const PageName = ({logo, pageName}: Props) => {
    return (
        <div className="page__title"> 
            <Logo logo= {logo} height="100"/>
            <span className="page__title--title">{pageName}</span>
        </div>
    );
}

export default PageName;