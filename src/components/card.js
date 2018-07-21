import React from 'react';
/*
  props
  title: string, the card's title
  link: String, card's link
  body: string, card's inner text
  footerPicture:  string picture's path
  j
*/
export default class Card extends React.Component  {
  render() {

    const title = this.props.title || '';
    const card_link = this.props.link || '#';
    let body = this.props.body || '';


    let  link = <div></div>;
    if (this.props.link) {
      link = <div className="link card__link-wrapper">
               <a className="link card__link" href={card_link}> {card_link} </a>
             </div>
    }


    let footerPicture = <div></div>;
    if (this.props.picture) {
      const bundle = this.props.picture;
      console.log(bundle);

      let icon;
      try {

      } catch (e) {
        console.log(e);
      }

      footerPicture =
        <img
          src={bundle.src ? bundle.src : ''}
          alt={bundle.alt || ''}
          className="card__footer-picture"
        />
    }




    return(
      <div className="card">
        <div className="card__header">
          <div className="title card__title"> {title} </div>
          {link}
        </div>
        <div className="card__body">
          {body}
        </div>
        <div className="card__footer">
          <div className="card__footer-picture-wrapper">
            {footerPicture}
          </div>
        </div>
      </div>
    );
  }
}
