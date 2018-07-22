import React from 'react';

export default class SearchTool extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  updateStr = (event)=>{this.setState({searchString: event.target.value})}


  render() {
    return(
      <div className="search-tool__wrapper">
        <input type="text" placeholder="Search tool" className="search-tool"
          value={this.state.searchString || ''} onChange={this.updateStr}/>
          <div className="search-tool__icon">
            <span className="lnr lnr-magnifier"></span>
          </div>
      </div>
    );
  }
}
