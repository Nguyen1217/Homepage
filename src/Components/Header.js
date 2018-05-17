import React, { Component } from 'react';
import signin from './assets/signin.png';

//==============HEADER COMPONENT======================================================================
class Header extends Component {
  render() {
    return (
      <div className ="header-wrapped">
      {/* navbar  */}
        <div className ="container">
          <nav className ="navbar">
            <div className ="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle = "collapse" data-target = "#myNavbar">
                <span className ="icon-bar"></span>
                <span className ="icon-bar"></span>
                <span className ="icon-bar"></span>
              </button>
              <a className ="navbar-brand" href="">Logo</a>
            </div>
            <div className ="collapse navbar-collapse" id = "myNavbar">
              <ul className ="nav navbar-nav navbar-right">
                <li><a href = "" className="sign-in"><img alt = "" src = {signin}/>Sign in</a></li>
                <li><a href = "" className = "sign-up">Sign up</a></li>
              </ul>
            </div>
          </nav>
          {/*  end of navbar  */}
          <FilteredArticles articles = {this.props.articles}/>
        </div>
      </div>
    );
  }
}


//==============FilteredArticle COMPONENT======================================================================
class FilteredArticles extends Component {
  constructor(props){
    super(props);
    this.state = {
        hide:false,
        hidden:false,
        updatedArticles:[],
    }
  }
  //------------------------------------------------------------------------
  filteredArticles(){
      let x = document.getElementById("getValue").value.trim().toLowerCase();
      //toggle model-overlay & transform input
      if(x === ""){
          this.setState({
            hidden:false,hide:false
          })
      }
      else{
        this.setState({
         hidden:true,hide:true
        })
      }
      //
      //filer data before passing
      let article_arr = this.props.articles.filter(function(item){
        if(x.search(" ") === -1 || x !== ""){
          var a = item.title.split(" ");
          for(var i = 0; i < a.length; i++){
            if(a[i].toLowerCase().indexOf(x) === 0){
              return item;
            }
          }
        }
        else{
          if(item.title.toLowerCase().indexOf(x) >= 0){
            return item;
          }
        }
        return article_arr;
      });
      this.setState({updatedArticles:article_arr})
  }
 
  //------------------------------------------------------------------------
  render() {
    return (
      <div className = "home-section-1">
        {this.state.hide ? <div className= "modal-overlay"></div>:null}
        <div className ="row">
          <div className ="col-md-7 col-sm-12">
            <h1 className ="home-title">Connect with the community <br/>you have interest</h1>
          </div>
          {/* <!-- searching --> */}
          <div className ="col-md-5 col-sm-12 search">
            <div className="col-sm-12">
              <input id = "getValue" className = "search__input" type="text" placeholder="What is your problem?" onInput = {this.filteredArticles.bind(this)} className = {this.state.hide ? 'search__input-changeSize': 'search__input'}/>           
            </div>
            <div className ="col-sm-12">
              {this.state.hidden ? 
                (<ul className = "filteredArticles">
                  {this.state.updatedArticles.map((updatedArticles,i) => 
                    <li className = "filteredArticles__article" key = {i} >
                        <a  href = {'https://twitter.com/' + updatedArticles.url} target="_blank">{updatedArticles.title}</a>
                    </li>
                    )}
                </ul>) : null
              }
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Header;