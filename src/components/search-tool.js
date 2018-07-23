import React from 'react';

export default class SearchTool extends React.Component  {

  render() {
    return(
      <div className="search-tool__wrapper">
        <input type="text" placeholder="Search tool" className="search-tool"
          value={this.props.searchString || ''}
          onChange={(event)=>this.props.updateSearch(event)}
         />
        <div className="search-tool__icon">
          <span className="lnr lnr-magnifier"></span>
        </div>
      </div>
    );
  }
}
