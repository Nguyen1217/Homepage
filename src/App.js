import React, { Component } from 'react';

import './App.css';
import Tabs from './Components/Tabs';
import Content from './Components/Content';
import Popup from './Components/Popup';
import IconAction from './Components/IconAction';
import ThumnailTopUser from './Components/ThumnailTopUser';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabName:[
        {name:"Top question", id: 1},
        {name:"English", id: 2},
        {name:"Technology", id: 3},
      ],

      currentTab: 1,
      showPopup: false,
      userInfo:{
        thumbnail:"1202370756/jesse_livermore",
        url_profile:"Malala"
      },
      articles:[
        {title: 'node js tutorial', url:'TEDTalks'},
        {title: 'Nde js là gì', url:'TEDTalks'},
        {title: 'tutritrtr w3school', url:'TEDTalks'},
        {title: ' js cawn node	', url:'TEDTalks'},
      ],
      Data:{
        Top:[
          {title: "How are you?", url: "185928", avar_ask:"980144824350334976/PpZvlqyf", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML ", link_id:""},
          {title: "em muốn học NodeJS để làm chat bot fb trong khi không biết gì về JS được không ?", url: "185928", avar_ask:"801780692174700545/wD_8r5QD", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen",time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Về $$state trong angularjs", url: "185928", avar_ask:"1202370756/jesse_livermore", num_answer: 5, url_profile:"UN_Women", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Mình cần tuyển 1 bạn làm NodeJS/ReactJS không cần năm kinh nghiệm", url: "185928", avar_ask:"951158055705591808/B3opkDZk", url_profile:"UNHumanRights", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Tuyển Technical Leader Node Js up to 2500 USD", url: "185928", avar_ask:"75978493/Home5", url_profile:"hrw", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
          
        ],
        Eng:[
          {title: "Help : Có cách nào , khi database , thay đổi , thì server tự động send data lên client không ?", url: "185928", avar_ask:"655888379876261888/05UeZm5P", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML ", link_id:""},
          {title: "Cách sử dụng formdata để thêm hình ảnh trong angular 4", url: "185928", avar_ask:"981623277918543874/0VU53Sxz", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen",time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Xin project mẫu đơn giản nodejs cho người mới bắt đầu (em đã học nodejs trên tutorialspoint và w3)", url: "185928", avar_ask:"1202370756/jesse_livermore", num_answer: 5, url_profile:"UN_Women", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Cần hướng dẫn làm Chat bot bằng Node.Js", url: "185928", avar_ask:"951158055705591808/B3opkDZk", url_profile:"UNHumanRights", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Sequelize Many-to-Many thêm sửa xóa quan hệ sao cho đúng?", url: "185928", avar_ask:"75978493/Home5", url_profile:"hrw", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
        ],
        Tech:[
          {title: "ob liên quan đến blockchain cần 1 full-stack javascript", url: "185928", avar_ask:"980144824350334976/PpZvlqyf", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML ", link_id:""},
          {title: "Về $$state trong angularjs", url: "185928", avar_ask:"801780692174700545/wD_8r5QD", url_profile:"Malala", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen",time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Xin tài liệu hóa học trọn bộ kiến thức nodejs của Thầy Nhữ Bảo Vũ", url: "185928", avar_ask:"1202370756/jesse_livermore", num_answer: 5, url_profile:"UN_Women", num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Nodejs_passport", url: "185928", avar_ask:"951158055705591808/B3opkDZk", url_profile:"UNHumanRights", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "},
          {title: "Về $$state trong angularjs", url: "185928", avar_ask:"75978493/Home5", url_profile:"hrw", num_answer: 5, num_follow: 10, time_ask: '7m ago', num_posts:3, num_views:155, avar_asn:"thumb16", name:"Nguyen Nguyen", time_ans:"a day ago",ans_nearest: "Anh cho em theo học hỏi với ạ. Em chưa có tí kinh nghiệm nào, trước chỉ biết chút HTML "}
        ]
      },
      thumbTopUsers:[
        {name: "975836512305799168/7s4F1bgX", url_profile:""},
        {name: "1202370756/jesse_livermore", url_profile:""},			
        {name: "951158055705591808/B3opkDZk", url_profile:""},
        {name: "801780692174700545/wD_8r5QD", url_profile:""},
        {name: "975836512305799168/7s4F1bgX", url_profile:""},			
        {name: "841735312447528964/Aa5ons5N", url_profile:""},
        {name: "897842063827488768/AjAxpLoq", url_profile:""},
        {name: "968467143128952832/fMSaHnf4", url_profile:""},
        {name: "867029912909209601/WJuaUqSc", url_profile:""},
        {name: "902240214860652545/t-5lYHwi", url_profile:""},
        {name: "996486637692620801/nN0m4lNq", url_profile:""},
        {name: "990765441739042816/XU_s2PjL", url_profile:""},
        {name: "971950294794887169/C17lzCDU", url_profile:""},
        {name: "971950294794887169/C17lzCDU", url_profile:""},
        {name: "971850230743355392/yKNhYyTK", url_profile:""},
        {name: "926578268609933313/Kdj8DtcG", url_profile:""},
        {name: "980166718399148032/zOaWpsgW", url_profile:""},
        {name: "1367548442/erik_leica_self", url_profile:""},
        {name: "839937736018501632/0aXmic50", url_profile:""},
        {name: "970340112868442114/_2BAgWQv", url_profile:""},
        {name: "829855293479739393/HEk2j8Qd", url_profile:""},
        {name: "655888379876261888/05UeZm5P", url_profile:""},
        {name: "972573726725296128/CC36nU13", url_profile:""},
        {name: "874682365506756608/WcFH3Ypp", url_profile:""},
        {name: "771047261799190528/u1k3bVpr", url_profile:""},
        {name: "771885422834098176/c5_Nj8j4", url_profile:""},
        {name: "913142041437188097/auleqJYx", url_profile:""},
        {name: "882152508134739968/8vihmn9W", url_profile:""},
        {name: "794319229642162176/bnpkMnPG", url_profile:""},
        {name: "990953990509744128/WOc4FXTv", url_profile:""},
        {name: "979094475405512707/jaeYRnZQ", url_profile:""},
        {name: "979094475405512707/jaeYRnZQ", url_profile:""},
        {name: "979094475405512707/jaeYRnZQ", url_profile:""}
      ]
      
    }
  }
//====FUNCTION=======================================================================
changeTab(tabName){
  this.setState({currentTab:tabName.id})
}

togglePopup() {
  this.setState(prevState => ({
    showPopup: !prevState.showPopup
  }));
}
//===================================================================================
render() {
    return (
      <div>
        <header className = "header">
          <Header articles = {this.state.articles}/>
        </header>
        
        <div className="container">
          <div className = "home-section-2">
            <ThumnailTopUser thumbTopUsers = {this.state.thumbTopUsers}/>
          </div>

          <div className = "home-section-3">
            <IconAction />
          </div>

          <div className = "home-section-4">
              {/* navbar-tab */}
              <Tabs 
                  togglePopup = {this.togglePopup.bind(this)}
                  tabName = {this.state.tabName}
                  changeTab = {this.changeTab.bind(this)}
                  currentTab = {this.state.currentTab}
                />
              {/* popup */}
              {this.state.showPopup ? 
                <Popup 
                  userInfo = {this.state.userInfo}
                  togglePopup = {this.togglePopup.bind(this)} /> : null
              }
              {/* top questions content */}
              <Content 
                Top = {this.state.Data.Top} 
                Eng = {this.state.Data.Eng} 
                Tech = {this.state.Data.Tech}
                currentTab = {this.state.currentTab}
              />
          </div>
          
        </div>
      </div>
      
    );
  }
}

export default App;
