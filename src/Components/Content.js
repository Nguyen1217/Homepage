import React, { Component } from 'react';


//==============CONTENT COMPONENT====================================================================
class Content extends Component {
  render() {
    return (
        <div>
          {this.props.currentTab === 1 ? <Posts data = {this.props.Top}/> : null }
          {this.props.currentTab === 2 ? <Posts data = {this.props.Eng}/> : null }
          {this.props.currentTab === 3 ? <Posts data = {this.props.Tech}/> : null }
        </div>
    );
  }
}


//==============POSTS COMPONENT======================================================================
class Posts extends Component {
  render() {
    return (
        <ul className = "posts">
            {this.props.data.map((data,i) => 
              <li className = "post"  key = {i} >
                <Post
                  data = {data}
                />
               </li>
            )}
        </ul>
    );
  }
}


//==============POST COMPONENT======================================================================
class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      follow:false
    }
  }
    //------------------------------------------------------------------------
  toggleFollow() {
    this.setState(prevState => ({
      follow: !prevState.follow
    }));
  }
    //------------------------------------------------------------------------
  render() {
    return (
      <div className = "row">
        <div className="col-md-1 hidden-xs hidden-sm posts__status status--answers">
          <span>{this.props.data.num_posts}</span>
          <br/>
          <a href = {'https://scifi.stackexchange.com/questions/' + this.props.data.url + '/how-is-the-name-gandalf-pronounced'} target = "_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i></a>
        </div>

        <div className="col-md-1 hidden-xs hidden-sm posts__status status--views">
          <span>{this.props.data.num_views}</span>
          <br/>
          <a href = {'https://scifi.stackexchange.com/questions/' + this.props.data.url + '/how-is-the-name-gandalf-pronounced'} target = "_blank" rel="noopener noreferrer"><i className="fa fa-comments"></i></a>
        </div>

        <div className="col-md-7 col-sm-9 col-xs-10">
          <div className="posts pull-left">
            <a href = "https://twitter.com/letsbsocial1" target="_blank" rel="noopener noreferrer" >
              <img className="posts__user-icon" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} alt = ""/>
            </a>
          </div>
          <h2 className="posts__title">
            <a href = {'https://scifi.stackexchange.com/questions/' + this.props.data.url + '/how-is-the-name-gandalf-pronounced'} target = "_blank" rel="noopener noreferrer" className="title">
              {this.props.data.title}
            </a>
            <div className = "posts__timeago">
              <small>{this.props.data.time_ask}</small>
              <div className = "posts__topuser-answer">
                <span><a href={'https://twitter.com/' + this.props.data.url_profile} target = "_blank">
                  <img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} className="posts__user-icon--ans"/>
                </a></span>
                <span><a href={'https://twitter.com/' + this.props.data.url_profile} target = "_blank">
                  <img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} className="posts__user-icon--ans"/>
                </a></span>
                <span><a href={'https://twitter.com/' + this.props.data.url_profile} target = "_blank">
                  <img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} className="posts__user-icon--ans"/>
                </a></span>
                <span><a href={'https://twitter.com/' + this.props.data.url_profile} target = "_blank">
                  <img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} className="posts__user-icon--ans"/>
                </a></span>
                <span><a href={'https://twitter.com/' + this.props.data.url_profile} target = "_blank">
                  <img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} className="posts__user-icon--ans"/>
                </a></span>
              </div>
            </div>
          </h2>

          <div className="posts__action-icon">
            <p className="posts__follow-icon">
                <a href = {'https://scifi.stackexchange.com/questions/' + this.props.data.url + '/how-is-the-name-gandalf-pronounced'} target = "_blank">
                  <i className="fa fa-edit fa-lg answer-icon"></i>
                    <span>Answer</span>
                </a>
            </p>
            <p className="posts__follow-icon" onClick = {this.toggleFollow.bind(this)}>
                <i className ="fa fa-wifi"></i>
                <span>{this.state.follow ? 'Following' : 'Follow'}</span>
                <span>{this.state.follow ? this.props.data.num_follow-- : this.props.data.num_follow++  }</span>
            </p>
          </div>
        </div>
        <div className ="col-xs-2 visible-xs mobile-status">
                <span>{this.props.data.num_answer}</span>
                <a href = {'https://scifi.stackexchange.com/questions/' + this.props.data.url + '/how-is-the-name-gandalf-pronounced'} target = "_blank"><span className ="glyphicon glyphicon-circle-arrow-right"></span></a>
        </div>

        <div className="col-md-3 col-sm-3 hidden-xs posts__sidebar">
          <div className="posts__sidebar-card">
            <p >
              <a className = "posts__name-answer"><img alt = "" src = {'https://pbs.twimg.com/profile_images/'+ this.props.data.avar_ask +'_400x400.jpg'} className="posts__user-icon--answer"/>
                {this.props.data.name}
              </a>
              {/* <!--syntax <a href="page.html#anchor">text</a> -->
              <!-- :href = "../page.html#" + item.link_id --> */}
              
              <small className = "posts__timeago-sidebar"><a>{this.props.data.time_ans}</a></small>
            </p>
            <div className = "posts__content">
                <p >{this.props.data.ans_nearest}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
