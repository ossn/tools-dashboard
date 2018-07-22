import React from 'react';
import NavigationBar from './navigation-bar';
import ToolsDashboard from './tools-dashboard';
import Footer from './footer';


export default class App extends React.Component  {
  render() {
    return(
      <div className="app">
          <NavigationBar />
          <div className="app__container">
            <ToolsDashboard />
          </div>
          <Footer />
      </div>
    );
  }
}
