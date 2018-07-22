import React from 'react';
import mozillaLogo from './../images/Mozilla_logo-inverse_colors.png';
import fake_footer_text from './../fake_about';


export default class Footer extends React.Component  {
  render() {
    return(
      <div className="footer">
        <div className="footer__logo-wrapper">
          <img src={mozillaLogo} alt="mozilla" className="footer__logo"/>
        </div>
        <div className="footer__text">
          {fake_footer_text}
        </div>
      </div>
    );
  }
}
