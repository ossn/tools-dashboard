import React from 'react';
import Card from './../components/card';
import ToolsDashboard from './tools-dashboard';
import contentData from './../content';


export default class App extends React.Component  {
  render() {
    return(
      <div>
        <ToolsDashboard />
      </div>
    );
  }
}
