import React from 'react';
import Card from './../components/card';
import Bricks from 'bricks.js'

// import sample data
import contentData from './../content';


export default class ToolsDashboard extends React.Component  {

  componentDidMount() {
    this.addBricks();
  }

  addBricks() {
    // write the  media queries and appearence settings
    const sizes = [
      {columns: 1, gutter: 10},
      {mq: '768px', columns: 2, gutter: 20},
      {mq: '1024px', columns: 3, gutter: 40}
    ];

    const bricks = Bricks({
      container: '#tools-dashboard-container',
      packed: 'packed',
      sizes: sizes
    });

    document.addEventListener('DOMContentLoaded', event => {
      bricks
        .resize(true)     // bind resize handler
        .pack()           // pack initial items
    });
  }

  render() {

    const content = contentData.map((item, i)=>{
      return (
        <Card title={item.title}
              link={item.link}
              body={item.body}
              picture={item.icon}
              key={i}
        />
      );
    });

    return (
      <div id="tools-dashboard-container">
        {content}
      </div>
    );
  }
}
