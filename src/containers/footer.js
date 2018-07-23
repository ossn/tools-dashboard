import React from 'react';
import ossnLogo from './../images/ossn_logo-inverse_colors.png';
import fake_footer_text from './../fake_about';


export default class Footer extends React.Component  {
  render() {
    return(
      <div className="footer">
        <div className="footer__container">
          <div className="footer__logo-wrapper">
            <img src={ossnLogo} alt="mozilla" className="footer__logo"/>
          </div>
          <div className="footer__text">
            {fake_footer_text}
          </div>
        </div>
      </div>
    );
  }
}
