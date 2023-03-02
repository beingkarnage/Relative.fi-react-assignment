interface Props {
    height? : string;
}

export const BinanceLogo = ({height="50"} : Props)=> {
    return (
        <svg width="50" height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49.2464 31.0476C45.9075 44.4406 32.3426 52.5913 18.948 49.2515C5.55903 45.9126 -2.59168 32.3468 0.748713 18.9549C4.08618 5.56048 17.6511 -2.59085 31.0415 0.748085C44.4351 4.08702 52.5854 17.6543 49.2461 31.0479L49.2463 31.0476H49.2464Z" fill="#F3BA2F"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9999 15.8666L18.5263 22.3402L18.5265 22.34L14.7599 18.5733L24.9999 8.33331L35.2433 18.5764L31.4766 22.343L24.9999 15.8666ZM12.0993 21.2327L8.33252 25L12.0991 28.766L15.8659 24.9992L12.0993 21.2327ZM18.526 27.6601L24.9996 34.1333L31.4761 27.657L35.2448 31.4217L35.2429 31.4237L24.9996 41.6666L14.7596 31.4266L14.7542 31.4213L18.526 27.6601ZM37.8993 21.2348L34.1325 25.0016L37.8992 28.7681L41.6658 25.0013L37.8993 21.2348Z" fill="white"/>
    <path d="M28.8203 24.998H28.8219L25.0001 21.1759L22.1751 24V24L21.8506 24.3247L21.1813 24.9942L21.1759 24.9994L21.1813 25.0048L25.0001 28.8242L28.8222 25.002L28.8241 24.9999L28.8206 24.998" fill="white"/>
    </svg>
    );
}

export default BinanceLogo;