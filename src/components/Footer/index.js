import React from 'react';
import styles from './styles.scss';
// import Mail from './Mail.js';

function Footer(props) {
  // const { children, fullscreen, background, widthStyle } = props;

  const centerClassNameTemplate = `${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`;

  return (
    <div 
      className={`${centerClassNameTemplate} ${styles["background"]} ${styles["flex-column"]}`}
      >
      <div className={`${centerClassNameTemplate} ${styles["flex-row"]}`}
        style={{marginBottom: "20px"}}>
        <a href="https://www.facebook.com/berkeleyPSE" className={`${styles["icon"]}`}>
          <img src="facebookIcon.png" style={{maxHeight: "36px", maxWidth: "36px"}}/>
        </a>
        <a href="/contact" className={`${styles["icon"]}`}>
          <Mail/>
        </a>
        <a href="https://www.instagram.com/pseberkeley" className={`${styles["icon"]}`}>
          <img src="instagramIcon.png" style={{maxHeight: "36px", maxWidth: "36px", marginLeft:"6px"}}/>
        </a>
      </div>
      <p>© 2019 — Pi Sigma Epsilon | UC Berkeley Zeta Chi Chapter</p>
    </div>
  );
}

const Mail = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 27.857 27.857" style={{"enableBackground":"new 0 0 27.857 27.857"}} xmlSpace="preserve" width="50px" height="36px">
    <g>
      <path style={{"fill":"#FFFFFF"}} d="M2.203,5.331l10.034,7.948c0.455,0.36,1.082,0.52,1.691,0.49c0.608,0.03,1.235-0.129,1.69-0.49    l10.034-7.948c0.804-0.633,0.622-1.152-0.398-1.152H13.929H2.604C1.583,4.179,1.401,4.698,2.203,5.331z" data-original="#010002" data-old_color="#010002"></path>
      <path style={{"fill":"#FFFFFF"}} d="M26.377,7.428l-10.965,8.325c-0.41,0.308-0.947,0.458-1.482,0.451    c-0.536,0.007-1.073-0.144-1.483-0.451L1.48,7.428C0.666,6.811,0,7.142,0,8.163v13.659c0,1.021,0.836,1.857,1.857,1.857h12.071H26    c1.021,0,1.857-0.836,1.857-1.857V8.163C27.857,7.142,27.191,6.811,26.377,7.428z" data-original="#010002" data-old_color="#010002"></path>
    </g> 
  </svg>);
};

export default Footer;
