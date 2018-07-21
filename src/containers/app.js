import React from 'react';
import Card from './../components/card';
import contentData from './../content';


export default class App extends React.Component  {
  render() {

    const content = contentData.map((item, i)=>{

      return (
        <Card title={item.title} link={item.link} body={item.body} picture={item.icon} key={i}/>
      );
    });


    return(
      <div>
        {content}
      </div>
    );
  }
}
