import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
		
  {id:1, name:'Knock Knock'},
  {id:2, name:'Frog Knock'},
  {id:3, name:'Tech Nology'},
  {id:4, name:'Team Lid'},
  {id:5, name:'H R'}
]

let messages = [
  {id:1, message:'Hi, i love Lamashtu'},
  {id:2, message:'Frog take it'},
  {id:3, message:'New path for react'},
  {id:4, message:'Where my project bitch'},
  {id:5, message:'Good job my little boy'}
]

let posts = [
  {id:1, message:'Hi this is new web frog', likesCount: 15},
  {id:2, message:'This is messenger made in react', likesCount: 11},
  {id:3, message:'Take it', likesCount: 2},
  {id:4, message:'Thanks', likesCount: 333333}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
