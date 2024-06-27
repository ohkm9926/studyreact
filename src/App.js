/*eslint-disable*/
import React , {useState} from 'react';

import './App.css';

function App() {
  let [글제목 , 글제목변경] = useState(['여자코트추천','강남우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts ='강남고기맛집';
  
  function 제목바꾸기(){
       let newArary = [...글제목];
       newArary.sort();
       글제목변경(newArary);
   }
  return (
    
    <div className="App">
       <div className='black-nav'>
      <div>개발 blog</div>
       </div>
        <button onClick={ 제목바꾸기 }>버튼</button> 
       <div className='list'>
        <h3>{글제목[0]} <span onClick={ ()=>따봉변경(따봉 + 1)}>👍</span> {따봉}</h3>
        <p>2월 18일 발행</p>
        <hr/>
        
       </div>
       <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
        
       </div>
       <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
       </div>

       <Modal />
       <Modal1 />

    </div>
  );
}
function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
function Modal1(){
  return(
    <div className='modal1'>
      <h2>제목1</h2>
      <p>날짜1</p>
      <p>상세내용1</p>
    </div>


  )
}

export default App;