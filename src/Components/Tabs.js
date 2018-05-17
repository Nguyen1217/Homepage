import React, { Component } from 'react';

class Tabs extends Component {

  handleClick(tabName){
    this.props.changeTab(tabName)
  }
 //=============================================================================
  render() {
    return (
      <div className="row">
        <div className = "navbar-tabs">
          <div className="col-md-7 col-sm-6 col-xs-10">
            <ul className="tabs">
              {this.props.tabName.map((tabName) =>
                <li className = "tabs__tab-list" key = {tabName.id} >
                  <Tab 
                    name = {tabName.name}
                    handleClick = {this.handleClick.bind(this,tabName)} 
                    active = {this.props.currentTab === tabName.id}
                  />
                </li>
              )}
            </ul>
          </div>

          <div className="col-md-2 col-sm-2 all-answer">
            <i className="fa fa-edit fa-lg"></i>
            <a href = "https://www.quora.com/answer"  target="_blank" rel="noopener noreferrer">Answer</a>
          </div>
          
          <div className="col-md-3 col-sm-4 col-xs-2 wrapper-input">
            <input className = "makeQuestion" type="text" onClick = {this.props.togglePopup} placeholder="Search..."/>
             <span className = "makeQuestion-searchIcon" onClick = {this.props.togglePopup}><i className="fa fa-search"></i></span>
          </div>
        </div>
      </div>
    );
  }

  
}
//---------------------------------------------------------------------------
class Tab extends Component{
  render(){
    return(
      <p  
        onClick = {this.props.handleClick}
        className = {this.props.active ? 'active': 'notActive'}
      >
        {this.props.name}
      </p>
    )
  }
}

export default Tabs;
