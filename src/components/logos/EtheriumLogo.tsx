interface Props {
    height? : string;
}

export const EtheriumLogo = ({height="50"} : Props)=> {
    return (
        <svg width="50" height={height} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11.3152" cy="11" r="11" fill="#EDF0F4"/>
        <path d="M11.285 4.40002L11.1975 4.69726V13.3216L11.285 13.4089L15.2882 11.0425L11.285 4.40002Z" fill="#343434"/>
        <path d="M11.285 4.40002L7.28168 11.0425L11.285 13.4089V9.22287V4.40002Z" fill="#8C8C8C"/>
        <path d="M11.2851 14.1668L11.2358 14.227V17.2991L11.2851 17.443L15.2908 11.8017L11.2851 14.1668Z" fill="#3C3C3B"/>
        <path d="M11.2849 17.443V14.1668L7.28162 11.8017L11.2849 17.443Z" fill="#8C8C8C"/>
        <path d="M11.285 13.4089L15.2883 11.0426L11.285 9.2229V13.4089Z" fill="#141414"/>
        <path d="M7.28162 11.0426L11.2849 13.4089V9.2229L7.28162 11.0426Z" fill="#393939"/>
        </svg>        
    );
}

export default EtheriumLogo;