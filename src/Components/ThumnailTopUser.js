import React, { Component } from 'react';

class ThumnailTopUser extends Component{
    renderAvatar(i) {
        return <Avatar thumbTopUsers={this.props.thumbTopUsers[i]}/>
    }
           
    render(){
        return(
            <div>
                <div className="column" style={{right:'92.4%'}} >										
                    {this.renderAvatar(0)}{this.renderAvatar(1)}	            
                </div>
                <div className="column" style={{right:'84.7%'}}>										
                    {this.renderAvatar(2)}{this.renderAvatar(3)}
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[4].url_profile} target="_blank">
                        <img alt="" className="thumb smallSize1" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[4].name +'_400x400.jpg'}></img>	
                    </a>	            
                </div>
                <div className="column" style={{right:'77%'}}>										
                    {this.renderAvatar(5)}{this.renderAvatar(6)}	            
                </div>
                <div className="column" style={{right:'69.3%'}}>
                    {this.renderAvatar(7)}
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[8].url_profile} target="_blank">
                        <img alt="" className="thumb smallSize2" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[8].name +'_400x400.jpg'}></img>	
                    </a>
                </div>
                <div className="column" style={{right:'61.6%'}}>										
                    {this.renderAvatar(9)}{this.renderAvatar(10)}	
                </div>
                <div className="column" style={{right:'53.9%'}}>										
                    {this.renderAvatar(11)}{this.renderAvatar(12)}
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[13].url_profile} target="_blank">
                        <img alt="" className="thumb smallSize1" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[13].name +'_400x400.jpg'}></img>	
                    </a>	            
                </div>
                <div className="column" style={{right:'46.2%'}}>										
                    {this.renderAvatar(14)}{this.renderAvatar(15)}	            
                </div>
                <div className="column" style={{right:'38.5%'}}>										
                    {this.renderAvatar(16)}	
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[17].url_profile} target="_blank">
                        <img alt="" className="thumb smallSize3" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[17].name +'_400x400.jpg'}></img>	
                    </a>            
                </div>
                <div className="column" style={{right:'30.8%'}}>										
                    {this.renderAvatar(18)}{this.renderAvatar(19)}	            
                </div>
                <div className="column"style={{right:'23.1%'}}>										
                    {this.renderAvatar(20)}{this.renderAvatar(21)}
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[22].url_profile} target="_blank">
                     <img alt="" className="thumb smallSize1" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[22].name +'_400x400.jpg'}></img>	
                    </a>      
                </div>
                <div className="column" style={{right:'15.4%'}}>										
                    {this.renderAvatar(23)}{this.renderAvatar(24)}
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[25].url_profile} target="_blank">
                        <img alt="" className="thumb smallSize4" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[31].name +'_400x400.jpg'}></img>	
                    </a> 
                </div>
                <div className="column" style={{right:'7.7%'}}>										
                    {this.renderAvatar(26)}{this.renderAvatar(27)}{this.renderAvatar(28)}					           
                </div>		        
                <div className="column" style={{right:'0%'}}>										
                    {this.renderAvatar(29)}{this.renderAvatar(30)}{this.renderAvatar(31)}
                    <a href={'https://twitter.com/' + this.props.thumbTopUsers[32].url_profile} target="_blank">
                        <img alt="" className="thumb smallSize5" src={'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers[32].name +'_400x400.jpg'}></img>	
                    </a> 
                </div>
            </div>			
        );
    }
}

class Avatar extends React.Component{
    render(){
         return(	
             <div className = "thumb-wrapped">								
            <a href={'https://twitter.com/' + this.props.thumbTopUsers.url_profile} target="_blank">
                <img 
                    alt="" className="thumb thumbUser" 
                    src = {'https://pbs.twimg.com/profile_images/'+ this.props.thumbTopUsers.name +'_400x400.jpg'}
                    >
                </img>                
            </a>
            </div>
            );
        }	
    }

export default ThumnailTopUser;
