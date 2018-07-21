import React from 'react';
import NavigationBar from './navigation-bar';
import ToolsDashboard from './tools-dashboard';


export default class App extends React.Component  {
  render() {
    return(
      <div>
        <NavigationBar />
        <ToolsDashboard />
      </div>
    );
  }
}
