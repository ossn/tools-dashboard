import React from 'react';
import Card from './../components/card';
import Bricks from 'bricks.js'

// import sample data
import contentData from './../content';


export default class ToolsDashboard extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.addBricks();
  }

  componentDidUpdate() {
    if (this.state.bricks) {
      this.state.bricks.resize(true).pack();
    }
  }

  addBricks() {
    // write the  media queries and appearence settings
    const sizes = [
      {columns: 1, gutter: 10},
      {mq: '630px', columns: 2, gutter: 15},
      {mq: '768px', columns: 2, gutter: 15},
      {mq: '1024px', columns: 3, gutter: 20}
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

    this.setState({bricks: bricks});
  }

  render() {

    const filter = this.props.filter || '';
    const all = contentData;
    let selected = [];
    if (filter.length > 0) {
      selected = all.filter((item)=>{
        return item.title.indexOf(filter) > -1;
      });
    } else {
      selected = all;
    }

    const content = selected.map((item, i)=>{

      const iconBundle = {
        alt: item.icon.alt,
        src: item.icon.src,
      }

      return (
        <Card title={item.title}
              link={item.link}
              body={item.body}
              picture={iconBundle}
              key={i}
        />
      );
    });

    const messageExtraClasses = content.length === 0 ? 'dashboard__message--shown' : '';
    const dashboardExtraClasses = content.length === 0 ? 'dashboard--shrink' : '';

    return (
      <div className="dashboard__wrapper">
        <div className={`dashboard__message ${messageExtraClasses}`}>
            {`No card matches "${this.props.filter}"`}
        </div>
        <div id="tools-dashboard-container" className={`dashboard ${dashboardExtraClasses}`}>
          {content}
        </div>
      </div>
    );
  }
}
