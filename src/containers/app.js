import React from 'react';
import NavigationBar from './navigation-bar';
import ToolsDashboard from './tools-dashboard';
import Footer from './footer';


export default class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  updateStr = (event)=>{
    if (event.target.value.length < 500) {
      this.setState({searchString: event.target.value});
    }
  }

  render() {
    return(
      <div className="app">
          <NavigationBar
            updateSearch={this.updateStr}
            searchString={this.state.searchString}
           />
          <div className="app__container">
            <ToolsDashboard filter={this.state.searchString}/>
          </div>
          <Footer />
      </div>
    );
  }
}
