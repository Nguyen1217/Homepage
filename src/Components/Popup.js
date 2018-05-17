import React, { Component } from 'react';

class Popup extends Component {
 
  render() {
    return (
        <div>
          <div className= "modal-overlay" onClick = {this.props.togglePopup}></div>
		    <div className="container">
                <div className = "col-md-5 col-md-offset-2 askQuestionModal" >
                    <div className = "row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <i onClick = {this.props.togglePopup} class="fa fa-times pull-right"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-11 col-xs-12">
                            <a href = {'https://twitter.com/' + this.props.userInfo.url_profile}><img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.userInfo.thumbnail +'_400x400.jpg'} className="profile-photo"/></a>
                            <input className = "input-text" placeholder="What do you want to ask?"/>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <textarea placeholder="Your content..."></textarea>
                        </div>
                        
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 pull-left">
                        <select className="select">
                            <option>Topics</option>
                            <option>English</option>
                            <option>Technology</option>
                            <option>Startup</option>
                        </select>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <button className="submit-button pull-right">Add question</button>
                        </div>
                    </div>
                </div>
		    </div>
        </div>
      
    );
  }
}

export default Popup;
