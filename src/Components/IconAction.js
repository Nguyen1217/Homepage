import React, { Component } from 'react';
import ask from './assets/ask.png';

class IconAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
				{name:"Ask", title:"Anybody can ask a question ", icon:'https://www.bitstamp.net/s/icons/perks_2.png'},
				{name:"Solve problem", title:"We have a lot of experts to help you solve problem", icon:'https://www.bitstamp.net/s/icons/perks_3.png'},
				{name:"Connect", title:"Help you connect with the community where expand your knowlege", icon:'https://www.bitstamp.net/s/icons/perks_1.png'}
			]
        }
    }
  render() {
    return (
        
        <div>
            <div className="row icons-3-wrapper">
                    {this.state.data.map((data,i) => 
                        <div className="col-md-4" key = {i} >
                            <div className="icons-3-wrapper__icon-container">
                                <img alt = "" src = {data.icon}/>
                                <div className="icons-3-wrapper__content-wrapper">
                                    <h3>{data.name}</h3>
                                    <p>{data.title}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className = "btn-wrapper"><span className="btn-wrapper__action">GET STARTED</span></div>
        </div>
     
        
      
    );
  }
}

export default IconAction;